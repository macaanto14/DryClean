using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DryClean.Models
{
    public class Customer
    {
        [Key]
        public int customerID { get; set; }
        [Required]
        public string customerName { get; set; }
        [Required]
        public string deliveryDate { get; set; }
        [Required]
        public int phoneNumber { get; set; }
        [Required]
        public string OrderID { get; set; }
        [Required]
        public string invoiceNo { get; set; }
        [Required]
        public int itemNo { get; set; }
        [Required]
        public string itemName { get; set; }
        [Required]
        public int price { get; set; }
        [Required]
        public int quntity { get; set; }
        [Required]
        public int total { get; set; }
    }
}
