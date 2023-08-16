using System.ComponentModel.DataAnnotations;
namespace ToDoApi
{
    public class ToDo
    {
        public int Id { get; set; }
        public string Description { get; set; } = string.Empty;
        [DataType(DataType.Date)]
        public DateTime DueDate { get; set; }  

        public Boolean IsCompleted { get; set; }
    }
}
