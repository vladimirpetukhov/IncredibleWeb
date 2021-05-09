using IncredibleWeb.ApiClient.Middlewares;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;

namespace IncredibleWeb.ApiClient.Extensions
{
    public class ApiClientRegisterExtensions
    {
        public static IServiceCollection AddApiClient(
            this IServiceCollection services,
            Action<HttpClient> clientConfiguration)
        {
            services.AddTransient<HttpContextMiddleware>();

            services.AddHttpClient<ApiClient>(clientConfiguration)
                .AddHttpMessageHandler<HttpContextMiddleware>();

            return services;
        }
    }
}
