using System.Collections.Generic;
using System.Threading.Tasks;
using LMS_Backend.Domain.Models;
using LMS_Backend.Service.DTO;
using LMS_Backend.Service.Interfaces;
using LMS_BAckend.Service.DTO;
using LMS_Infrastructure.Context;
using LMS_Infrastructure.Repository;
using Microsoft.AspNetCore.Authorization;


namespace LMS_Backend.Service.Services
{
    public class UserInterface(IRepository<User> userRepository) : IUserInterface
    {
        private readonly IRepository<User> _userRepository = userRepository;

        [Authorize(Roles = "Admin")]
        public async Task DeleteUserAsync(int id)
        {
            var user = await _userRepository.GetByIdAsync(id.ToString());
            if (user == null)
                throw new KeyNotFoundException($"User with ID {id} not found.");

            await _userRepository.DeleteAsync(user);
        }

        [Authorize(Roles = "Teacher,Admin")]
        public Task<IReadOnlyList<User>> GetAllUsersAsync()
        {
            return _userRepository.GetAllAsync();
        }

        [Authorize(Roles = "Student,Teacher,Admin")]
        public async Task<User?> GetUserByIdAsync(string id)
        {
            return await _userRepository.GetByIdAsync(id);
        }

        [Authorize(Roles = "Student,Teacher,Admin")]
        public async Task<User?> LoginUserAsync(LoginDTO loginDTO)
        {
            var users = await _userRepository.GetAllAsync();
            var user = users.FirstOrDefault(u => u.Email == loginDTO.Email && u.PasswordHash == loginDTO.Password);

            if (user == null)
                return null;

            return user;
        }

        [Authorize(Roles = "Student,Teacher,Admin")]
        public async Task RegisterUserAsync(RegisterDTO registerDTO)
        {
            var user = new User
            {
                FirstName = registerDTO.FirstName,
                LastName = registerDTO.LastName,
                Email = registerDTO.Email,
                PasswordHash = registerDTO.Password
            };

            // Check if the email already exists
            var existingUser = await _userRepository.GetAsync(u => u.Email == user.Email);
            if (existingUser.Any())
                throw new InvalidOperationException("Email already exists.");

            await _userRepository.AddAsync(user);
        }

        [Authorize(Roles = "Student,Admin")]
        public async Task UpdateUserAsync(UpdateUserDTO dto)
        {
            var users = await _userRepository.GetAllAsync();
            var user = users.FirstOrDefault(u => u.Email == dto.Email && u.PasswordHash == dto.OldPassword);

            if (user == null)
                throw new KeyNotFoundException($"User not found.");

            user.FirstName = dto.FirstName;
            user.LastName = dto.LastName;
            user.Email = dto.Email;
            user.PasswordHash = dto.NewPassword;
            await _userRepository.UpdateAsync(user);
        }
    }


}
