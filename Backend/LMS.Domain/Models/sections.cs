using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace LMS_Backend.Domain.Models
{
    public class Sections
    {
        [Key]
        public string Id { set; get; } = string.Empty;

        [NotNull]
        public int CourseId { set; get; }
        public string Title { set; get; } = string.Empty;
        public int Order { set; get; }

        public Course Course { get; set; } = null!;
        public ICollection<Lessons> Lessons { get; set; } = [];
    }
}