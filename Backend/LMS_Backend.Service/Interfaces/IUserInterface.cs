using LMS_Backend.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace LMS_Backend.Service.Interfaces
{
    public interface IUserInterface
    {
        Task<IEnumerable<User>> GetAllUsersAsync();
        Task<User?> GetUserByIdAsync(int id);
        Task AddUserAsync(User user);
        Task UpdateUserAsync(User user);
        Task DeleteUserAsync(int id);
    }
}
