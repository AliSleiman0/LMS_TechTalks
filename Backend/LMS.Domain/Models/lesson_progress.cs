using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace LMS_Backend.Domain.Models
{
    public class LessonProgress
    {
        [Key]
        public string Id { set; get; } = string.Empty;

        [NotNull]
        public string UserId { set; get; } = string.Empty;

        [NotNull]
        public string LessonId { set; get; } = string.Empty;
        public DateTime CompletedAt { set; get; } = DateTime.UtcNow;

        public Lessons Lesson { get; set; } = null!;
    }
}