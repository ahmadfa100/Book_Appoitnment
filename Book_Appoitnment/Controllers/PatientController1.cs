using Microsoft.AspNetCore.Mvc;

namespace Book_Appoitnment.Controllers
{
    public class PatientController1 : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
