using Book_Appoitnment.Models;
using Microsoft.AspNetCore.Mvc;

namespace Book_Appoitnment.Controllers
{
    public class AccountController : Controller
    {

        [HttpGet]
        public IActionResult Login()
        {
            return View(new LoginViewModel());
        }

        // POST: /Account/Login
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Login(LoginViewModel vm)
        {
            if (!ModelState.IsValid)
                return View(vm);

            // TODO: validate credentials...
            // If valid:
            //    return RedirectToAction("Index", "Patient");
            // Otherwise:
            ModelState.AddModelError("", "Invalid login attempt.");
            return View(vm);
        }

    }
}
