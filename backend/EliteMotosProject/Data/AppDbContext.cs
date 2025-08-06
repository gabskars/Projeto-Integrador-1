using EliteMotosProject.Models;
using Microsoft.EntityFrameworkCore;

namespace EliteMotosProject.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Category> Categories { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<User> Users { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(c => c.Id);
            entity.Property(c => c.Name)
                .IsRequired()
                .HasMaxLength(100);
            entity.HasMany(c => c.Products)
                .WithOne(p => p.Category)
                .HasForeignKey(p => p.CategoryId)
                .OnDelete(DeleteBehavior.Restrict);
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(p => p.Id);
            entity.Property(p => p.Name)
                .IsRequired()
                .HasMaxLength(100);
            entity.Property(p => p.Price)
                .HasColumnType("decimal(18,2)")
                .IsRequired();
            entity.Property(p => p.Quantity)
                .IsRequired();
            entity.Property(p => p.Code)
                .IsRequired()
                .HasMaxLength(13);
            entity.HasIndex(p => p.Code)
                .IsUnique();
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(u => u.Id);
            entity.Property(u => u.Name)
                .IsRequired()
                .HasMaxLength(100);
            entity.Property(u => u.Email)
                .IsRequired()
                .HasMaxLength(100);
            entity.HasIndex(u => u.Email)
                .IsUnique();
            entity.Property(u => u.Password)
                .IsRequired()
                .HasColumnType("varchar(255)");
        });
    }
}
