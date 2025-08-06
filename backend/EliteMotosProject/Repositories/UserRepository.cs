﻿using EliteMotosProject.Data;
using EliteMotosProject.Models;
using EliteMotosProject.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace EliteMotosProject.Repositories;
public class UserRepository : IUserRepository
{
    private readonly AppDbContext _context;

    public UserRepository(AppDbContext context) => _context = context;

    public async Task<User?> GetByEmailAsync(string email)
    {
        return await _context.Users
            .FirstOrDefaultAsync(u => u.Email == email);
    }
    public async Task AddAsync(User user)
    {
        await _context.Users.AddAsync(user);
        await _context.SaveChangesAsync();
    }
}
