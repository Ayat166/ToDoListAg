using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToDoApi.Data;

namespace ToDoApi.Controllers
{
    [Route("api/completeTask/")]
    [ApiController]
    public class CompletedController : ControllerBase
    {
        private readonly DataContext _context;
        public CompletedController(DataContext context)
        {
            _context = context;
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<List<ToDo>>> UpdateCompleteToDo(int id)
        {
            var dbtask = await _context.ToDo.FindAsync(id);
            if (dbtask == null)
                return BadRequest("Task not found");
            if(dbtask.IsCompleted==false) dbtask.IsCompleted = true;
            else dbtask.IsCompleted = false;
            await _context.SaveChangesAsync();
            return Ok(await _context.ToDo.ToListAsync());
        }
    }
}
