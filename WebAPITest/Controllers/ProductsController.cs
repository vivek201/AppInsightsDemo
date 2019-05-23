using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebAPITest.Models;

namespace WebAPITest.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ProductsController : ApiController
    {
        List<Product> products = new List<Product>
        {
            new Product { Id = 1, Name = "Apple", Category = "Fruits", Price = 10 },
            new Product { Id = 2, Name = "Pumpkin", Category = "Vegetables", Price = 20 },
            new Product { Id = 3, Name = "Potato", Category = "Vegetables", Price = 30 }
        };
        

        public List<Product> GetAllProducts()
        {
            return products;
        }

        public IHttpActionResult GetProduct(int id)
        {
            var product = products.FirstOrDefault(x => x.Id == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }
    }
}
