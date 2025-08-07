using System.ComponentModel.DataAnnotations;

namespace EliteMotosProject.DTOs;
public class CategoryCreateDto
{
    [Required]
    [StringLength(100)]
    public string Name { get; set; }
}
