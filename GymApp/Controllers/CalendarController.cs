using Microsoft.AspNetCore.Mvc;

namespace GymApp.Controllers;

[ApiController]
[Route("[controller]")]
public class DaysController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<DaysController> _logger;

    public DaysController(ILogger<DaysController> logger)
    {
        _logger = logger;
    }

    [HttpGet("monday")]
    public Day Get()
    {
         var day = new Day
         {
             Name = "Monday",
             Tasks = new string[] {"Push ups", "Sit ups"}
         };

         return day;
    }
}

public class Day
{
    public string Name { get; set; }
    public string[] Tasks { get; set; }
}