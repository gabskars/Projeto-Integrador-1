using EliteMotosProject.DTOs.Auth;
using EliteMotosProject.Models;
using EliteMotosProject.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace EliteMotosProject.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IUserRepository _userRepository;

    public AuthController(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    [HttpPost("register")]
    public async Task<ActionResult<UserResponseDto>> Register(RegisterDto dto)
    {
        if (await _userRepository.GetByEmailAsync(dto.Email) != null)
            return BadRequest("Email já cadastrado");

        var user = new User
        {
            Name = dto.Name,
            Email = dto.Email,
            Password = dto.Password
        };

        await _userRepository.AddAsync(user);

        return Ok(new UserResponseDto
        {
            Id = user.Id,
            Name = user.Name,
            Email = user.Email
        });
    }
    [HttpPost("login")]
    public async Task<ActionResult<UserResponseDto>> Login(LoginDto dto)
    {
        var user = await _userRepository.GetByEmailAsync(dto.Email);

        if (user == null || user.Password != dto.Password)
            return Unauthorized("Credenciais inválidas");

        return Ok(new UserResponseDto
        {
            Id = user.Id,
            Name = user.Name,
            Email = user.Email
        });
    }
}
