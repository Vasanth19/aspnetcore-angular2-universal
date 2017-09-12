using AspCoreServer.Data;
using AspCoreServer.Models;
using AspCoreServer.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace AspCoreServer.Controllers
{
  [Route("api/[controller]")]
  public class ItemsController : Controller
  {
    private readonly DocumentDBRepository _repo;

    public ItemsController(DocumentDBRepository db)
    {
      _repo = db;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
      var items = await _repo.GetItemsAsync<Item>(d => !d.Completed);

      if (!items.Any())
      {
        return NotFound("item not Found");
      }
      else
      {
        return Ok(items);
      }
    }

    [HttpGet]
    [Route("GetPage")]
    public async Task<IActionResult> GetPage([FromHeader] string continuationToken)
    {
      //var headers = Request.Headers;
      //  if (headers["x-ms-continuation"] !="")
      //  continuationToken = headers["x-ms-continuation"].First();

      var response = await _repo.GetPagedItemsAsync<dynamic>(d => true, 100, continuationToken);

      if (!response.Results.Any())
      {
        return NotFound("item not Found");
      }
      else
      {
        return Ok(response.Results);

      }

     }
  }
}
