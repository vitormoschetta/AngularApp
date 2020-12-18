using System;
using System.Linq;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Infra.Context
{
    public class InitializeData
    {
        public static void InitializeProducts(IServiceProvider serviceProvider)
        {
            using (var context = new AppDbContext(
                serviceProvider.GetRequiredService<DbContextOptions<AppDbContext>>()))
            {
                if (context.Product.Any())  // <-- Se já possui dados, não prossegue
                    return;


                var product = new Product("Product A", 5.50m);
                context.Product.Add(product);
                context.SaveChanges();

                product = new Product("Product B", 10.90m);
                context.Product.Add(product);
                context.SaveChanges();

                product = new Product("Product C", 1.99m);
                context.Product.Add(product);
                context.SaveChanges();

                product = new Product("Product D", 250.00m);
                context.Product.Add(product);
                context.SaveChanges();

                product = new Product("Product E", 1999.00m);
                context.Product.Add(product);
                context.SaveChanges();

                product = new Product("Product F", 0.50m);
                context.Product.Add(product);
                context.SaveChanges();               

            }
        }
    }
}