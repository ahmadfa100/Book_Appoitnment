using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace Book_Appoitnment.Models
{
    public class RegisterViewModel : Controller
    {
     
            [Required] public string FirstName { get; set;}
            [Required] public string LastName { get; set; }
            [Required][Phone] public string Mobile{ get; set; }
            [Required] public string Gender{ get; set; }
            [Required][EmailAddress] public string Email { get; set; }
            [Required][MinLength(6)] public string Password { get; set; }
            [Required]bool Healthinsurance{ get; set; }

    }
}
