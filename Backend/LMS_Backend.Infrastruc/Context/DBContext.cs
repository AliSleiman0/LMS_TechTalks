using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using LMS_Backend.Domain.Models;

namespace LMS_Backend.Infrastruc.Context
{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions<DBContext> options) : base(options)
        {
        }

        // Correct the casing of 'user' to 'User' if the class is named 'User'
        public DbSet<User> Users { get; set; }
    }
}
