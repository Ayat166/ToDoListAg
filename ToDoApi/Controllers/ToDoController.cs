using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToDoApi.Data;

namespace ToDoApi.Controllers
{
    [Route("api/tasks/")]
    [ApiController]
    public class ToDoController : ControllerBase
    {
        private readonly DataContext _context;
        public ToDoController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<ToDo>>> GetToDoList()
        {
            return Ok(await _context.ToDo.ToListAsync());
        }
        [HttpPost]
        public async Task<ActionResult<List<ToDo>>> CreateToDo(ToDo task)
        {
            _context.ToDo.Add(task);
            await _context.SaveChangesAsync();
            return Ok(await _context.ToDo.ToListAsync());

        }
        [HttpPut]
        public async Task<ActionResult<List<ToDo>>> UpdateToDo(ToDo task)
        {
            var dbtask = await _context.ToDo.FindAsync(task.Id);
            if (dbtask == null) 
                return BadRequest("Task not dound");
            dbtask.Description = task.Description;
            dbtask.DueDate = task.DueDate;
            await _context.SaveChangesAsync();
            return Ok(await _context.ToDo.ToListAsync());
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<ToDo>>> DeleteToDo(int id)
        {
            var dbtask = await _context.ToDo.FindAsync(id);
            if (dbtask == null)
                return BadRequest("Task not dound");

            _context.ToDo.Remove(dbtask);
            await _context.SaveChangesAsync();
            return Ok(await _context.ToDo.ToListAsync());
        }

    }
}
