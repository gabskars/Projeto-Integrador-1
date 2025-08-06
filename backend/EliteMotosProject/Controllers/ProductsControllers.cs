using EliteMotosProject.DTOs;
using EliteMotosProject.Models;
using EliteMotosProject.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class ProductsController : ControllerBase
{
    private readonly IProductRepository _repository;

    public ProductsController(IProductRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ProductResponseDto>>> GetAll()
    {
        var products = await _repository.GetAllAsync();
        return Ok(products.Select(p => MapToDto(p)));
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<ProductResponseDto>> GetById(int id)
    {
        var product = await _repository.GetByIdAsync(id);
        return product == null ? NotFound() : Ok(MapToDto(product));
    }
    [HttpGet("search/{name}")]
    public async Task<ActionResult<IEnumerable<ProductResponseDto>>> GetByName(string name)
    {
        var products = await _repository.GetByNameAsync(name);
        return Ok(products.Select(MapToDto));
    }
    [HttpGet("category/{categoryId}")]
    public async Task<ActionResult<IEnumerable<ProductResponseDto>>> GetByCategory(int categoryId)
    {
        var products = await _repository.GetByCategoryAsync(categoryId);
        return Ok(products.Select(MapToDto));
    }
    [HttpGet("barcode/{code}")]
    public async Task<ActionResult<ProductResponseDto>> GetByBarcode(string codigoBarras)
    {
        var product = await _repository.GetByBarcodeAsync(codigoBarras);
        return product == null ? NotFound() : Ok(MapToDto(product));
    }
    [HttpPost]
    public async Task<ActionResult<ProductResponseDto>> Create(ProductCreateDto dto)
    {
        var product = new Product
        {
            Name = dto.Name,
            Price = dto.Price,
            Quantity = dto.Quantity,
            Code = dto.Code,
            CategoryId = dto.CategoryId
        };

        await _repository.AddAsync(product);
        return CreatedAtAction(nameof(GetById), new { id = product.Id }, MapToDto(product));
    }
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, ProductUpdateDto dto)
    {
        var product = await _repository.GetByIdAsync(id);
        if (product == null) return NotFound();

        product.Name = dto.Name;
        product.Price = dto.Price;
        product.Quantity = dto.Quantity;
        product.CategoryId = dto.CategoryId;

        await _repository.UpdateAsync(product);
        return NoContent();
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        await _repository.DeleteAsync(id);
        return NoContent();
    }
    private ProductResponseDto MapToDto(Product product) => new()
    {
        Id = product.Id,
        Name = product.Name,
        Price = product.Price,
        Quantity = product.Quantity,
        Code = product.Code,
        CategoryId = product.CategoryId,
        CategoryName = product.Category?.Name ?? string.Empty
    };
}
