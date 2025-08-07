using System.ComponentModel.DataAnnotations;

namespace EliteMotosProject.DTOs;
public class CategoryUpdateDto
{
    [Required]
    [StringLength(100)]
    public string Name { get; set; }
}
