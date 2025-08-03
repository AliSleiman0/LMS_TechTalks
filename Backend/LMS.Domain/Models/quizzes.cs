using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace LMS_Backend.Domain.Models
{
    public class Quizzes
    {
        [Key]
        public string Id { set; get; } = string.Empty;
        [NotNull]
        public string LessonId { set; get; } = string.Empty;
        public string Question { set; get; } = string.Empty;
        public Lessons Lesson { get; set; } = null!;
    }
}