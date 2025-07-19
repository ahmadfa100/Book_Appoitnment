using System;
using System.Collections.Generic;

namespace Book_Appoitnment.DBEntities;

public partial class PatientsAppointment
{
    public int PatientsAppointmentId { get; set; }

    public int PatientsId { get; set; }

    public int DeviceId { get; set; }

    public int DayId { get; set; }

    public string Hour { get; set; } = null!;

    public decimal Price { get; set; }

    public virtual Day Day { get; set; } = null!;

    public virtual Patient Patients { get; set; } = null!;
}
