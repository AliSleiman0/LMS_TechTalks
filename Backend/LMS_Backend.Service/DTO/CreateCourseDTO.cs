using System.ComponentModel.DataAnnotations;

namespace LMS_BAckend.Service.DTO
{
    public class CreateCourseDto
    {
        [Required]
        public string Title { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        [Required]
        public string InstructorId { get; set; } = string.Empty;

        [Required]
        public int CategoryId { get; set; }

        public string? ThumbnailUrl { get; set; }

        public enum Level;

        public string Language { get; set; } = string.Empty;

        public bool IsPublished { get; set; }
    }

}