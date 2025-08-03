using Microsoft.EntityFrameworkCore;

namespace LMS_Backend.Domain.Models
{
    [Index(nameof(Name), IsUnique = true)]
    public class Categories
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;

        public ICollection<Course> Courses { get; set; } = [];
    }
}