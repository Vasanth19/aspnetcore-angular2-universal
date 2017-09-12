﻿using System;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Antiforgery;

using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

using Microsoft.AspNetCore.NodeServices;
using AspCoreServer.Data;
using Swashbuckle.AspNetCore.Swagger;
using AspCoreServer.Services;
using AspCoreServer.Models;

namespace AspCoreServer
{
  public class Startup
  {
    private IHostingEnvironment CurrentEnvironment { get; set; }

    public static void Main(string[] args)
    {
      var host = new WebHostBuilder()
          .UseKestrel()
          .UseContentRoot(Directory.GetCurrentDirectory())
          .UseIISIntegration()
          .UseStartup<Startup>()
          .Build();

      host.Run();
    }
    public Startup(IHostingEnvironment env)
    {
      CurrentEnvironment = env;
      var builder = new ConfigurationBuilder()
          .SetBasePath(env.ContentRootPath)
          .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
          .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
          .AddEnvironmentVariables();
      Configuration = builder.Build();
    }

    public IConfigurationRoot Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      // Add framework services.
      services.AddMvc();

      services.AddOptions();

      services.Configure<Models.AzureSettings>(Configuration.GetSection("DocumentDb"));
      services.AddSingleton<DocumentDBRepository>(x => new DocumentDBRepository(new DocumentDbSettings(Configuration.GetSection("DocumentDb"))));


      // if (CurrentEnvironment.IsDevelopment())
      // {
      //   services.AddNodeServices(options =>
      //   {
      //     options.LaunchWithDebugging = true;
      //     options.DebuggingPort = 5858;

      //   });
      // }
      // else {
        services.AddNodeServices();
//      }

      var connectionStringBuilder = new Microsoft.Data.Sqlite.SqliteConnectionStringBuilder { DataSource = "spa.db" };
      var connectionString = connectionStringBuilder.ToString();

      services.AddDbContext<SpaDbContext>(options =>
          options.UseSqlite(connectionString));

      // Register the Swagger generator, defining one or more Swagger documents
      services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1", new Info { Title = "Angular 4.0 Universal & ASP.NET Core advanced starter-kit web API", Version = "v1" });
      });
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, SpaDbContext context)
    {
      loggerFactory.AddConsole(Configuration.GetSection("Logging"));
      loggerFactory.AddDebug();

        app.UseStaticFiles();

      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
        app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions {
          HotModuleReplacement = true
        });

        DbInitializer.Initialize(context);

        app.UseSwagger();

        // Enable middleware to serve swagger-ui (HTML, JS, CSS etc.), specifying the Swagger JSON endpoint.
        app.UseSwaggerUI(c =>
        {
          c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
        });

        app.MapWhen(x => !x.Request.Path.Value.StartsWith("/swagger"), builder =>
        {
          builder.UseMvc(routes =>
          {
            routes.MapSpaFallbackRoute(
                name: "spa-fallback",
                defaults: new { controller = "Home", action = "Index" });
          });
        });
      }
      else
      {
        app.UseMvc(routes =>
        {
          routes.MapRoute(
              name: "default",
              template: "{controller=Home}/{action=Index}/{id?}");

          routes.MapSpaFallbackRoute(
              name: "spa-fallback",
              defaults: new { controller = "Home", action = "Index" });
        });
        app.UseExceptionHandler("/Home/Error");
      }
    }
  }
}
