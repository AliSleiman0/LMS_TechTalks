
using LMS_Backend.Service.Interfaces;
// using LMS_Backend.Service.Services; giving error it doesnt exist
using Microsoft.EntityFrameworkCore;
using LMS_Infrastructure.Repository;
using LMS_Infrastructure.Context;
using LMS_Backend.Domain.Models;
using Microsoft.AspNetCore.Identity;
using LMS_Backend.Service.Services;
using LMS_BAckend.Service.Mapping;



var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");


builder.Services.AddDbContext<DBContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));


builder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
builder.Services.AddScoped<IUserInterface, UserInterface>();
builder.Services.AddAutoMapper(typeof(UserMapping));
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());


builder.Services.AddIdentity<User, IdentityRole>()
    .AddEntityFrameworkStores<DBContext>() // This line is critical!
    .AddDefaultTokenProviders();


// Allow all CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

//giving error
//for the identity user
// builder.Services.AddIdentity<User, IdentityRole>(options =>
// {
//     //password validation options
//     options.Password.RequireDigit = true;
//     options.Password.RequiredLength = 8;
//     options.Password.RequireLowercase = true;
//     options.Password.RequireUppercase = true;
//     options.Password.RequireNonAlphanumeric = true;
//     options.Password.RequiredUniqueChars = 1;
//     //user needs a unique email
//     options.User.RequireUniqueEmail = true;

// })
// .AddEntityFrameworkStores<DbContext>()
// .AddDefaultTokenProviders();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.Run();
