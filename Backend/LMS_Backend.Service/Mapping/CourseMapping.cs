using AutoMapper;
using LMS_Backend.Domain.Models;
using LMS_BAckend.Service.DTO;

namespace LMS_BAckend.Service.Mapping
{
    public class CourseMapping : Profile
    {
        public CourseMapping()
        {
            CreateMap<CreateCourseDto, Course>().ReverseMap();
            CreateMap<CourseResponseDto, Course>().ReverseMap();
            CreateMap<UpdateCourseDto, Course>().ReverseMap();
        }
    }
}