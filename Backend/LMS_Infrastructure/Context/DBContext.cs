using LMS_Backend.Domain.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace LMS_Infrastructure.Context
{
    public class DBContext(DbContextOptions<DBContext> options)
        : IdentityDbContext<User>(options)
    {
        public DbSet<Categories> Categories { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Sections> Sections { get; set; }
        public DbSet<Lessons> Lessons { get; set; }
        public DbSet<Enrollment> Enrollments { get; set; }
        public DbSet<LessonProgress> LessonProgresses { get; set; }
        public DbSet<Quizzes> Quizzes { get; set; }
        public DbSet<StorageFile> StorageFiles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Course>()
                .Property(c => c.CourseLevel)
                .HasConversion<string>();

            modelBuilder.Entity<Lessons>()
                .Property(l => l.LessonType)
                .HasConversion<string>();

            modelBuilder.Entity<StorageFile>()
                .Property(f => f.Type)
                .HasConversion<string>();

            // Unique constraint on Category.Name
            modelBuilder.Entity<Categories>()
                .HasIndex(c => c.Name)
                .IsUnique();

            // Relationships
            modelBuilder.Entity<Course>()
                .HasOne(c => c.Category)
                .WithMany(cat => cat.Courses)
                .HasForeignKey(c => c.CategoryId);

            modelBuilder.Entity<Sections>()
                .HasOne(s => s.Course)
                .WithMany(c => c.Sections)
                .HasForeignKey(s => s.CourseId);

            modelBuilder.Entity<Lessons>()
                .HasOne(l => l.Section)
                .WithMany(s => s.Lessons)
                .HasForeignKey(l => l.SectionId);

            modelBuilder.Entity<Enrollment>()
                .HasOne(e => e.Course)
                .WithMany(c => c.Enrollments)
                .HasForeignKey(e => e.Course.Id);

            modelBuilder.Entity<LessonProgress>()
                .HasOne(lp => lp.Lesson)
                .WithMany()
                .HasForeignKey(lp => lp.LessonId);

            modelBuilder.Entity<Quizzes>()
                .HasOne(q => q.Lesson)
                .WithOne(l => l.Quiz)
                .HasForeignKey<Quizzes>(q => q.LessonId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
