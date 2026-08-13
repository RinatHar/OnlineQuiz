using Microsoft.EntityFrameworkCore;
using OnlineQuiz.DLL.Context;
using OnlineQuiz.DLL.Extensions;
using OnlineQuiz.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApi();

builder.Services.AddJwt(builder.Configuration);

// Добавление слоёв
// builder.Services.AddBll(builder.Configuration);
builder.Services.AddDal(builder.Configuration);

var app = builder.Build();

app.UseAuthentication();
app.UseAuthorization();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/openapi/v1.json", "API V1");
        options.RoutePrefix = "swagger";
    });
}

app.MapControllers();

// Применение миграций
using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationContext>();
    await dbContext.Database.MigrateAsync();
}

app.Run();