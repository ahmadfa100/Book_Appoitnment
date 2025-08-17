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

        //register
        [HttpGet]
        public IActionResult Register()
        {
            return View();
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

        //Register - post
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Register(RegisterViewModel vm)
        {
            if (!ModelState.IsValid)
                return View(vm);

            // TODO: create the user (save to DB, hash password, etc.)
            // For now simulate success and redirect to Login (or to a "Welcome" page)
            return RedirectToAction("Login");
        }
    }
}
