using AutoMapper;
using LMS_Backend.Domain.Models;
using LMS_Backend.Service.DTO;
using LMS_BAckend.Service.DTO;

namespace LMS_BAckend.Service.Mapping
{
    public class UserMapping : Profile
    {
        public UserMapping()
        {
            CreateMap<RegisterDTO, User>().ReverseMap();
            CreateMap<LoginDTO, User>().ReverseMap();
            CreateMap<UpdateUserDTO, User>().ReverseMap();
        }
    }
}