using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace DryClean.Models
{
    public class CustomerContext: DbContext
    {
        public DbSet<Customer> Customers { get; set; }
    }
}
