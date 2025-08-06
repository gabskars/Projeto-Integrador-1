using EliteMotosProject.DTOs;
using EliteMotosProject.Models;
using EliteMotosProject.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace EliteMotosProject.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CategoriesController : ControllerBase
{
    private readonly ICategoryRepository _repository;

    public CategoriesController(ICategoryRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<CategoryResponseDto>>> GetAll()
    {
        var categories = await _repository.GetAllAsync();
        return Ok(categories.Select(c => new CategoryResponseDto
        {
            Id = c.Id,
            Name = c.Name
        }));
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<CategoryResponseDto>> GetById(int id)
    {
        var category = await _repository.GetByIdAsync(id);
        if (category == null) return NotFound();

        return Ok(new CategoryResponseDto
        {
            Id = category.Id,
            Name = category.Name
        });
    }
    [HttpGet("search/{name}")]
    public async Task<ActionResult<IEnumerable<CategoryResponseDto>>> GetByName(string name)
    {
        var categories = await _repository.GetByNameAsync(name);
        return Ok(categories.Select(c => new CategoryResponseDto
        {
            Id = c.Id,
            Name = c.Name
        }));
    }
    [HttpPost]
    public async Task<ActionResult<CategoryResponseDto>> Create(CategoryCreateDto categoryDto)
    {
        var category = new Category
        {
            Name = categoryDto.Name
        };

        await _repository.AddAsync(category);

        return CreatedAtAction(nameof(GetById), new { id = category.Id }, new CategoryResponseDto
        {
            Id = category.Id,
            Name = category.Name
        });
    }
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, CategoryUpdateDto categoryDto)
    {
        var existingCategory = await _repository.GetByIdAsync(id);
        if (existingCategory == null) return NotFound();

        existingCategory.Name = categoryDto.Name;
        await _repository.UpdateAsync(existingCategory);

        return NoContent();
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var category = await _repository.GetByIdAsync(id);
        if (category == null) return NotFound();

        await _repository.DeleteAsync(id);
        return NoContent();
    }
}
