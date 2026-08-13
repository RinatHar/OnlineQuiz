using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineQuiz.DLL.Entity;

namespace OnlineQuiz.DLL.Configurations;

public class UserInfoEntityConfiguration : IEntityTypeConfiguration<UserInfoEntity>
{
    public void Configure(EntityTypeBuilder<UserInfoEntity> builder)
    {
        builder.ToTable("user_info");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Id).HasColumnName("id").ValueGeneratedOnAdd();
        builder.Property(x => x.CreatedAt).HasColumnName("created_at").HasDefaultValueSql("CURRENT_TIMESTAMP");
        builder.Property(x => x.UpdatedAt).HasColumnName("updated_at").HasDefaultValueSql("CURRENT_TIMESTAMP");
        
        builder.Property(x => x.UserId).HasColumnName("user_id").IsRequired().HasMaxLength(255);
        builder.HasIndex(x => x.UserId).IsUnique();
        
        builder.Property(x => x.Name).HasColumnName("name").IsRequired().HasMaxLength(255);
    }
}