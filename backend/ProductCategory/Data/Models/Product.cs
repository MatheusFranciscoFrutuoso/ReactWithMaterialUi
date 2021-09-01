using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public class Product : Base
    {
        public string Name { get; set; }
        public decimal Value { get; set; }
        public Category Category { get; set; }
    }
}
