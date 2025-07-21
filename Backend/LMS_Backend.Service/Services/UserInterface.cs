using System.Collections.Generic;
using System.Threading.Tasks;
using LMS_Backend.Domain.Models;
using LMS_Backend.Service.Interfaces;
using LMS_Infrastructure.Repository;

namespace LMS_Backend.Service.Services
{
    public class UserInterface : IUserInterface
    {
        private readonly IRepository<User> _userRepository;


        public UserInterface(IRepository<User> userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<IEnumerable<User>> GetAllUsersAsync()
        {
            return await _userRepository.GetAllAsync();
        }

        public async Task<User?> GetUserByIdAsync(int id)
        {
            return await _userRepository.GetByIdAsync(id);
        }

        public async Task AddUserAsync(User user)
        {
            await _userRepository.AddAsync(user);
        }

        public async Task UpdateUserAsync(User user)
        {
            await _userRepository.UpdateAsync(user);
        }

        public async Task DeleteUserAsync(int id)
        {
            await _userRepository.DeleteAsync(id);
        }

        Task<IEnumerable<User>> IUserInterface.GetAllUsersAsync()
        {
            throw new NotImplementedException();
        }

        Task<User?> IUserInterface.GetUserByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

       
    }
}
