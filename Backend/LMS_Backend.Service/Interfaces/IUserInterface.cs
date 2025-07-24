using LMS_Backend.Domain.Models;
using LMS_Backend.Service.DTO;
using LMS_BAckend.Service.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace LMS_Backend.Service.Interfaces
{
    public interface IUserInterface
    {
        Task<IReadOnlyList<User>> GetAllUsersAsync();
        Task<User?> GetUserByIdAsync(string id);
        Task RegisterUserAsync(RegisterDTO registerDto);
        Task<User?> LoginUserAsync(LoginDTO loginDto);
        Task UpdateUserAsync(UpdateUserDTO updateUserDto);
        Task DeleteUserAsync(int id);
    }
}
