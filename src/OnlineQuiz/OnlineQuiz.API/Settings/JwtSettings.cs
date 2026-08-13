using System.ComponentModel.DataAnnotations;

namespace OnlineQuiz.Settings;

public class JwtSettings
{
    [Required]
    public required string Secret { get; init; }
    
    [Required]
    public required string Issuer { get; init; }
    
    [Required]
    public required string Audience { get; init; }
    
    public int AccessTokenExpirationMinutes { get; init; } = 15;
    
    public int RefreshTokenExpirationDays { get; init; } = 7;
}