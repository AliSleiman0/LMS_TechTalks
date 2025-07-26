using Microsoft.AspNetCore.Mvc;
using LMS_Backend.Service.Interfaces;
using System.Threading.Tasks;
using LMS_BAckend.Service.DTO;
using LMS_Backend.Service.DTO;

namespace LMS_Backend.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController(IUserInterface userService) : ControllerBase
    {
        private readonly IUserInterface _userService = userService;

        [HttpGet("GetAllUsers")]
        public async Task<IActionResult> GetAllUsers()
        {
            return Ok(await _userService.GetAllUsersAsync());
        }

        [HttpGet("GetUser/{id}")]
        public async Task<IActionResult> GetUserById(string id)
        {
            var user = await _userService.GetUserByIdAsync(id);
            return user is null ? NotFound() : Ok(user);
        }

        [HttpPost("Register")]
        public async Task<IActionResult> RegisterUser([FromBody] RegisterDTO dto)
        {
            await _userService.RegisterUserAsync(dto);
            return Ok();
        }

        [HttpPost("Login")]
        public async Task<IActionResult> LoginUser([FromBody] LoginDTO dto)
        {
            var result = await _userService.LoginUserAsync(dto);
            return result is null ? Unauthorized() : Ok(result);
        }

        [HttpPut("Update")]
        public async Task<IActionResult> UpdateUser([FromBody] UpdateUserDTO dto)
        {
            await _userService.UpdateUserAsync(dto);
            return Ok();
        }

        [HttpDelete("Delete/{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            await _userService.DeleteUserAsync(id);
            return NoContent();
        }
    }
}
