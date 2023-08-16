using Microsoft.EntityFrameworkCore;

namespace ToDoApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<ToDo> ToDo => Set<ToDo>();
    }
}
