using System.ComponentModel.DataAnnotations;

namespace EliteMotosProject.DTOs;
public class ProductCreateDto
{
    [Required] public string Name { get; set; } = string.Empty;
    [Required] public decimal Price { get; set; }
    [Required] public int Quantity { get; set; }
    [Required] public string Code { get; set; } = string.Empty;
    [Required] public int CategoryId { get; set; }
}
