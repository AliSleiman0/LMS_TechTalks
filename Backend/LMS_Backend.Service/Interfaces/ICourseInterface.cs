using LMS_BAckend.Service.DTO;

namespace LMS_Backend.Service.Interfaces
{
    public interface ICourseInterface
    {
        Task<CourseResponseDto> CreateCourseAsync(CreateCourseDto createDto);
        Task<CourseResponseDto?> UpdateCourseAsync(string id, UpdateCourseDto updateDto);
        Task<bool> DeleteCourseAsync(string id);
        Task<CourseResponseDto?> GetCourseByIdAsync(string id);
        Task<IEnumerable<CourseResponseDto>> GetAllCoursesAsync();
    }
}
