using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace LMS_Backend.Domain.Models
{
    public class User
    {

        // Properties of the user class
        [Key]
		// TODO : ALI Kindly Used Guids Which are more sfae when exposed ( represented over 128 bits and unpredictable )!!
		// Guid is not used here as per the original code, but it's a good practice to consider.
		// public Guid Id { get; set; }
		public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
    }
}
