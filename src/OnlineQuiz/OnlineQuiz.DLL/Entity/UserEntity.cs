using OnlineQuiz.BLL.Enums;

namespace OnlineQuiz.DLL.Entity;

public class UserEntity
{
    public Guid Id { get; init; }
    
    public DateTimeOffset CreatedAt { get; init; }
    
    public DateTimeOffset UpdatedAt { get; init; }
    
    public string Email { get; init; } = default!;
    
    public string Login { get; init; } = default!;
    
    public string PasswordHash { get; init; } = default!;
    
    public UserInfoEntity UserInfo { get; init; } = default!;

    public UserRole Role { get; init; } = UserRole.Member;
}