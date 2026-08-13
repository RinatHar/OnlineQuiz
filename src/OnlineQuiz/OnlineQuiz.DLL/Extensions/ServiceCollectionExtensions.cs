using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using OnlineQuiz.BLL.Enums;
using OnlineQuiz.DLL.Context;

namespace OnlineQuiz.DLL.Extensions;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddDal(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<ApplicationContext>(options =>
            options.UseNpgsql(
                configuration.GetConnectionString("Postgres"),
                npgsqlOptions => npgsqlOptions.MapEnum<UserRole>()));
        
        // services.AddScoped<IUserRepository, UserRepository>();
        
        return services;
    }
}