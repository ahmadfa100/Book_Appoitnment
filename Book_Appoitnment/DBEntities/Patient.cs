using System;
using System.Collections.Generic;

namespace Book_Appoitnment.DBEntities;

public partial class Patient
{
    public int PatientId { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string Mobile { get; set; } = null!;

    public bool Gender { get; set; }

    public string Email { get; set; } = null!;

    public string Password { get; set; } = null!;

    public bool HasHealthInsurance { get; set; }

    public virtual ICollection<PatientsAppointment> PatientsAppointments { get; set; } = new List<PatientsAppointment>();
}
