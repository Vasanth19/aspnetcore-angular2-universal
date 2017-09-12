namespace AspCoreServer.Services
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Linq.Expressions;
    using System.Threading.Tasks;
    using Microsoft.Azure.Documents;
    using Microsoft.Azure.Documents.Client;
    using Microsoft.Azure.Documents.Linq;
  using AspCoreServer.Models;
  using AspCoreServer.Extensions;

  public class DocumentDBRepository
    {

    private readonly DocumentDbSettings _settings;
    private readonly Uri _collectionUri;
    private DocumentClient client;

        public DocumentDBRepository(DocumentDbSettings settings)
        {
          _settings = settings;

         _collectionUri = GetCollectionLink();
          client = new DocumentClient(_settings.DatabaseUri, _settings.DatabaseKey, new ConnectionPolicy()
          {
            MaxConnectionLimit = 100,
            ConnectionMode = ConnectionMode.Direct,
            ConnectionProtocol = Protocol.Tcp
          });

        client.OpenAsync().Wait();

          CreateDatabaseIfNotExistsAsync().Wait();
          CreateCollectionIfNotExistsAsync().Wait();

        }



    #region Private
    /// <summary>
    /// Obtains the link of a collection
    /// </summary>
    /// <param name="databaseName"></param>
    /// <param name="collectionName"></param>
    /// <returns></returns>
    private Uri GetCollectionLink()
    {
      return UriFactory.CreateDocumentCollectionUri(_settings.DatabaseName, _settings.CollectionName);
    }

    /// <summary>
    /// Obtains the link for a document
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    private Uri GetDocumentLink(string id)
    {
      return UriFactory.CreateDocumentUri(_settings.DatabaseName, _settings.CollectionName, id);
    }
    #endregion


        public async Task<T> GetItemAsync<T>(string id)
        {
            try
            {
                Document document = await client.ReadDocumentAsync(GetDocumentLink(id));
                return (T)(dynamic)document;
            }
            catch (DocumentClientException e)
            {
                if (e.StatusCode == System.Net.HttpStatusCode.NotFound)
                {
                    return default(T);
                }
                else
                {
                    throw;
                }
            }
        }

        public async Task<PagedResults<T>> GetPagedItemsAsync<T>(Expression<Func<T, bool>> predicate, int size = 10, string continuationToken = "")
        {
          var feedOptions = new FeedOptions() { MaxItemCount = size };
          if (!string.IsNullOrEmpty(continuationToken))
          {
            feedOptions.RequestContinuation = continuationToken;
          }
          return await client.CreateDocumentQuery<T>(GetCollectionLink(),feedOptions)
                  .Where(predicate)
                  .ToPagedResults();

        }

    public async Task<IEnumerable<T>> GetItemsAsync<T>(Expression<Func<T, bool>> predicate)
        {
            IDocumentQuery<T> query = client.CreateDocumentQuery<T>(
                GetCollectionLink(),
                new FeedOptions { MaxItemCount = -1 })
                .Where(predicate)
                .AsDocumentQuery();

            List<T> results = new List<T>();
            while (query.HasMoreResults)
            {
                results.AddRange(await query.ExecuteNextAsync<T>());
            }

            return results;
        }

        public async Task<Document> CreateItemAsync<T>(T item)
        {
            return await client.CreateDocumentAsync(GetCollectionLink(), item);
        }

        public async Task<Document> UpdateItemAsync<T>(string id, T item)
        {
            return await client.ReplaceDocumentAsync(GetDocumentLink(id), item);
        }

        public async Task DeleteItemAsync(string id)
        {
            await client.DeleteDocumentAsync(GetDocumentLink(id));
        }


        private async Task CreateDatabaseIfNotExistsAsync()
        {
            try
            {
                await client.ReadDatabaseAsync(UriFactory.CreateDatabaseUri(_settings.DatabaseName));
            }
            catch (DocumentClientException e)
            {
                if (e.StatusCode == System.Net.HttpStatusCode.NotFound)
                {
                    await client.CreateDatabaseAsync(new Database { Id = _settings.DatabaseName });
                }
                else
                {
                    throw;
                }
            }
        }

        private async Task CreateCollectionIfNotExistsAsync()
        {
            try
            {
                await client.ReadDocumentCollectionAsync(GetCollectionLink());
            }
            catch (DocumentClientException e)
            {
                if (e.StatusCode == System.Net.HttpStatusCode.NotFound)
                {
                    await client.CreateDocumentCollectionAsync(
                        UriFactory.CreateDatabaseUri(_settings.DatabaseName),
                        new DocumentCollection { Id = _settings.CollectionName },
                        new RequestOptions { OfferThroughput = 1000 });
                }
                else
                {
                    throw;
                }
            }
        }
    }
}