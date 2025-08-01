using LMS_Backend.Service.Interfaces;
using LMS_Backend.Service.Services;
using LMS_Backend.Domain.Models;
using LMS_Infrastructure.Repository;
using LMS_Infrastructure.Context;
using LMS_BAckend.Service.Mapping;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add controllers
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Connection string
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// Add DbContext with MySQL
builder.Services.AddDbContext<DBContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

// Register repositories and services
builder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
builder.Services.AddScoped<IUserInterface, UserInterface>();
builder.Services.AddScoped<ICourseInterface, CourseInterface>();

// AutoMapper
builder.Services.AddAutoMapper(typeof(UserMapping));

// Identity with password settings
builder.Services.AddIdentity<User, IdentityRole>(options =>
{
    // Password validation options
    options.Password.RequireDigit = true;
    options.Password.RequiredLength = 8;
    options.Password.RequireLowercase = true;
    options.Password.RequireUppercase = true;
    options.Password.RequireNonAlphanumeric = true;
    options.Password.RequiredUniqueChars = 1;

    // User email must be unique
    options.User.RequireUniqueEmail = true;
})
.AddEntityFrameworkStores<DBContext>()
.AddDefaultTokenProviders();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowAll");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
