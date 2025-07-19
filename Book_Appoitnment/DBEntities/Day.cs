using System;
using System.Collections.Generic;

namespace Book_Appoitnment.DBEntities;

public partial class Day
{
    public int DayId { get; set; }

    public string DayName { get; set; } = null!;

    public virtual ICollection<DeviceWorkingHour> DeviceWorkingHours { get; set; } = new List<DeviceWorkingHour>();

    public virtual ICollection<PatientsAppointment> PatientsAppointments { get; set; } = new List<PatientsAppointment>();
}
