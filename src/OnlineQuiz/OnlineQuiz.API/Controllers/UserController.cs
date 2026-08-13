using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace OnlineQuiz.Controllers;

[ApiController]
[Route("api/v1/[controller]")]
public class UserController : ControllerBase
{
    [HttpGet("check")]
    public async Task<Ok<bool>> Check(CancellationToken cancellationToken)
    {
        await Task.CompletedTask;
        return TypedResults.Ok(true);
    }
}