using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace LMS_Backend.Domain.Models
{
    public class Enrollment
    {
        [Key]
        public string Id { set; get; } = string.Empty;
        [NotNull]
        public string UserId { set; get; } = string.Empty;
        [NotNull]
        public string LessonId { set; get; } = string.Empty;
        public DateTime EnrolledAt { set; get; } = DateTime.UtcNow;
        public float Progress { set; get; } = 0.0f;

        public Course Course { get; set; } = null!;
    }
}