using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace LMS_Backend.Domain.Models
{
    public class Lessons
    {
        [Key]
        public string Id { set; get; } = String.Empty;
        [NotNull]
        public string SectionId { set; get; } = string.Empty;
        public string Title { set; get; } = string.Empty;
        public enum Type { Video, Document, Quiz, Other }
        public Type LessonType { set; get; }
        public string ContentUrl { set; get; } = string.Empty;
        public int Duaration { set; get; }
        public int Order { set; get; }

        public Sections Section { get; set; } = null!;
        public Quizzes Quiz { get; set; } = null!;
    }
}