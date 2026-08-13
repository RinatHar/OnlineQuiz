using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineQuiz.DLL.Entity;

namespace OnlineQuiz.DLL.Configurations;

public class UserEntityConfiguration : IEntityTypeConfiguration<UserEntity>
{
    public void Configure(EntityTypeBuilder<UserEntity> builder)
    {
        builder.ToTable("user");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Id).HasColumnName("id").ValueGeneratedOnAdd();
        builder.Property(x => x.CreatedAt).HasColumnName("created_at").HasDefaultValueSql("CURRENT_TIMESTAMP");
        builder.Property(x => x.UpdatedAt).HasColumnName("updated_at").HasDefaultValueSql("CURRENT_TIMESTAMP");
        
        builder.Property(x => x.Email).HasColumnName("email").IsRequired().HasMaxLength(255);
        builder.HasIndex(x => x.Email).IsUnique();
        
        builder.Property(x => x.Login).HasColumnName("login").HasMaxLength(255);
        builder.HasIndex(x => x.Login).IsUnique();
        
        builder.Property(x => x.PasswordHash).HasColumnName("password_hash").IsRequired().HasMaxLength(255);
        
        builder.Property(x => x.Role).HasColumnName("role").IsRequired();
        
        // Связи
        builder.HasOne(x => x.UserInfo)
            .WithOne(x => x.User)
            .HasForeignKey<UserInfoEntity>(x => x.UserId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}