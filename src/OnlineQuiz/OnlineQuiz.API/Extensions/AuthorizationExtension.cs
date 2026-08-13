using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using OnlineQuiz.Settings;

namespace OnlineQuiz.Extensions;

public static class AuthorizationExtension
{
    public static IServiceCollection AddJwt(this IServiceCollection services, IConfiguration configuration)
    {
        var jwtSettingsSection = configuration.GetSection("JwtSettings");
        var jwtSettings = jwtSettingsSection.Get<JwtSettings>();

        if (jwtSettings == null)
        {
            throw new InvalidOperationException("JwtSettings не настроен.");
        }

        services.AddAuthorization();
        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    
                    // строка, представляющая издателя
                    ValidIssuer = jwtSettings.Issuer,
                    
                    // будет ли валидироваться потребитель токена
                    ValidateAudience = true,
                    
                    // установка потребителя токена
                    ValidAudience = jwtSettings.Audience,
                    
                    // будет ли валидироваться время существования
                    ValidateLifetime = true,
                    
                    // установка ключа безопасности
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.Secret)),
                    
                    // валидация ключа безопасности
                    ValidateIssuerSigningKey = true,
                };
            });

        return services;
    }
}