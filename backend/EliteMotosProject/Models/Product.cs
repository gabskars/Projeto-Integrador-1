using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EliteMotosProject.Models;

public class Product
{
    public int Id { get; set; }
    [Required]
    [StringLength(100)]
    public string Name { get; set; } = string.Empty;
    [Required]
    [Column(TypeName = "decimal(18,2)")]
    public decimal Price { get; set; }
    [Required]
    public int Quantity { get; set; }
    [Required]
    [StringLength(13)]
    public string Code { get; set; } = string.Empty;
    public int CategoryId { get; set; }
    public Category? Category { get; set; }
}
