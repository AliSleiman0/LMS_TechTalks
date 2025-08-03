using System.ComponentModel.DataAnnotations;

namespace LMS_Backend.Domain.Models
{
    public class Course
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int InstructorId { get; set; }
        public int CategoryId { get; set; }
        public string ThumbnailUrl { get; set; } = string.Empty;
        public enum Level
        {
            Beginner,
            Intermediate,
            Advanced
        }
        public Level CourseLevel { get; set; }
        public string Language { get; set; } = string.Empty;
        public bool IsPublished { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public Categories Category { get; set; } = null!;
        public ICollection<Sections> Sections { get; set; } = [];
        public ICollection<Enrollment> Enrollments { get; set; } = [];
    }
}