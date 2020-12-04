using DryClean.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace DryClean.Controllers
{
    public class Customer : Controller
    {
       CustomerContext context = new CustomerContext();
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]

        public ActionResult createCustomer (Customer std)
        {
            context.Customers.Add(std);
            context.SaveChanges();
            string message = "SUCCESS";
            return Json(new { Message = message, JsonRequestBehavior.AllowGet });
        }

        public JsonResult getCustomer(string id)
        {
            List<Customer> customers = new List<Customer>();
            customers = context.customers.ToList();
            return Json(customers, JsonRequestBehavior.AllowGet);
        }
    }
}
