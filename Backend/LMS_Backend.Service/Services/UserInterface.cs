using System.Collections.Generic;
using System.Threading.Tasks;
using LMS_Backend.Domain.Models;
using LMS_Backend.Service.Interfaces;
using LMS_Infrastructure.Context;
using LMS_Infrastructure.Repository;


// THIS MUST BE IMPLEMENTED AS A SERVICE TO FOLLOW THE SOLID PRINCIPLES AND SEPARATION OF CONCERNS WHERE WE ALREADY HAVE THE GENERIC REPO , SO IMPLEMENTING SERVICES OF GET ALL , GET BY ID  AND DELETE AND THOSE ARE DONE IN SERVICES WHICH WILL BE USED IN APIs 
// SO WE DONT NEED TO REWRITE THE SAME CODE IN THE CONTROLLER OR API ENDPOINTS AND SO NO NEED TO THIS FILE THUS I WILL COMMENT IT OUT FOR NOW TILL YOU REVIEW IT ALI 


//namespace LMS_Backend.Service.Services
//{








//public class UserInterface : Repository<User> ,IUserInterface
//{
//	public UserInterface(DBContext context) : base(context) { }

//public async Task<IEnumerable<User>> GetAllUsersAsync()
//      {
//          return await _userRepository.GetAllAsync();
//      }

//      public async Task<User?> GetUserByIdAsync(Guid id)
//      {
//          return await _userRepository.GetByIdAsync(id);
//      }

//      public async Task AddUserAsync(User user)
//      {
//          await _userRepository.AddAsync(user);
//      }

//      public async Task UpdateUserAsync(User user)
//      {
//          await _userRepository.UpdateAsync(user);
//      }

//      public async Task DeleteUserAsync(Guid id)
//      {
//          var user = await _userRepository.GetByIdAsync(id);
//	await _userRepository.DeleteAsync(user);
//      }






//    }
//}
