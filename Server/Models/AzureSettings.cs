using System;
using System.ComponentModel.DataAnnotations;

namespace AspCoreServer.Models
{
    public class AzureSettings
    {
        public string Database { get; set; }
        public string Collection { get; set; }
        public string Endpoint { get; set; }
        public string AuthKey { get; set; }
  }
}
