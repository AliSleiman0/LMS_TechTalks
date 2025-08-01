namespace LMS_BAckend.Service.DTO
{
    public class CourseResponseDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public Guid InstructorId { get; set; }
        public int CategoryId { get; set; }
        public string ThumbnailUrl { get; set; } = string.Empty;
        public enum Level;
        public string Language { get; set; } = string.Empty;
        public bool IsPublished { get; set; }
        public DateTime CreatedAt { get; set; }
    }

}