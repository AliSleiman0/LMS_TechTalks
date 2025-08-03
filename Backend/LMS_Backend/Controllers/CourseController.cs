using LMS_Backend.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;
using LMS_BAckend.Service.DTO;

namespace LMS_Backend.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CourseController(ICourseInterface courseService) : ControllerBase
    {
        private readonly ICourseInterface _courseService = courseService;

        [HttpPost("Create")]
        public async Task<IActionResult> CreateCourse([FromBody] CreateCourseDto dto)
        {
            var created = await _courseService.CreateCourseAsync(dto);
            return CreatedAtAction(nameof(GetCourseById), new { id = created.Id.ToString() }, created);
        }

        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAllCourses()
        {
            var courses = await _courseService.GetAllCoursesAsync();
            return Ok(courses);
        }

        [HttpGet("Get/{id}")]
        public async Task<IActionResult> GetCourseById(string id)
        {
            var course = await _courseService.GetCourseByIdAsync(id);
            if (course == null)
                return NotFound();

            return Ok(course);
        }

        [HttpPut("Update/{id}")]
        public async Task<IActionResult> UpdateCourse(string id, [FromBody] UpdateCourseDto dto)
        {
            var updated = await _courseService.UpdateCourseAsync(id, dto);
            if (updated == null)
                return NotFound();

            return Ok(updated);
        }

        [HttpDelete("Delete/{id}")]
        public async Task<IActionResult> DeleteCourse(string id)
        {
            var deleted = await _courseService.DeleteCourseAsync(id);
            if (!deleted)
                return NotFound();

            return NoContent();
        }
    }
}
