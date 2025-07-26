
using System.ComponentModel.DataAnnotations;

namespace LMS_Backend.Service.DTO
{
    public class UpdateUserDTO
    {
        [Required]
        public string FirstName { get; set; } = string.Empty;

        [Required]
        public string LastName { get; set; } = string.Empty;

        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;

        [Required, DataType(DataType.Password)]
        public string NewPassword { get; set; } = string.Empty;

        [Required, DataType(DataType.Password)]
        public string OldPassword { get; set; } = string.Empty;
    }

}