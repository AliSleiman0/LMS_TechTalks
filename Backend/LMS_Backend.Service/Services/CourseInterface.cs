using AutoMapper;
using LMS_Backend.Domain.Models;
using LMS_Backend.Service.Interfaces;
using LMS_BAckend.Service.DTO;
using LMS_Infrastructure.Repository;
using Microsoft.AspNetCore.Authorization;

namespace LMS_Backend.Service.Services
{
    public class CourseInterface : ICourseInterface
    {
        private readonly IRepository<Course> _courseRepository;
        private readonly IMapper _mapper;

        public CourseInterface(IRepository<Course> courseRepository, IMapper mapper)
        {
            _courseRepository = courseRepository;
            _mapper = mapper;
        }

        [Authorize(Roles = "Teacher,Admin")]
        public async Task<CourseResponseDto> CreateCourseAsync(CreateCourseDto createDto)
        {
            var courseEntity = _mapper.Map<Course>(createDto);
            courseEntity.CreatedAt = DateTime.UtcNow;

            var createdCourse = await _courseRepository.AddAsync(courseEntity);
            return _mapper.Map<CourseResponseDto>(createdCourse);
        }

        [Authorize(Roles = "Teacher,Admin")]
        public async Task<bool> DeleteCourseAsync(string id)
        {
            var course = await _courseRepository.GetByIdAsync(id);
            if (course == null)
                return false;

            await _courseRepository.DeleteAsync(course);
            return true;
        }

        [Authorize(Roles = "Student,Teacher,Admin")]
        public async Task<IEnumerable<CourseResponseDto>> GetAllCoursesAsync()
        {
            var courses = await _courseRepository.GetAllAsync();
            return _mapper.Map<IEnumerable<CourseResponseDto>>(courses);
        }

        [Authorize(Roles = "Student,Teacher,Admin")]
        public async Task<CourseResponseDto?> GetCourseByIdAsync(string id)
        {
            var course = await _courseRepository.GetByIdAsync(id);
            if (course == null)
                return null;

            return _mapper.Map<CourseResponseDto>(course);
        }

        [Authorize(Roles = "Teacher,Admin")]
        public async Task<CourseResponseDto?> UpdateCourseAsync(string id, UpdateCourseDto updateDto)
        {
            var existingCourse = await _courseRepository.GetByIdAsync(id);
            if (existingCourse == null)
                return null;

            _mapper.Map(updateDto, existingCourse);
            await _courseRepository.UpdateAsync(existingCourse);

            return _mapper.Map<CourseResponseDto>(existingCourse);
        }
    }
}
