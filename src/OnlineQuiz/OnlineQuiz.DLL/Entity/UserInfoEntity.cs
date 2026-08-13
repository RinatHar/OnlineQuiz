namespace OnlineQuiz.DLL.Entity;

public class UserInfoEntity : BaseEntity
{
    public string Name { get; init; } = default!;
    
    public Guid UserId { get; init; }
    
    public UserEntity? User { get; init; }
}