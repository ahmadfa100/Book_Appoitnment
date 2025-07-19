using System;
using System.Collections.Generic;

namespace Book_Appoitnment.DBEntities;

public partial class DeviceWorkingHour
{
    public int DeviceWorkingHourId { get; set; }

    public int DeviceId { get; set; }

    public int DayId { get; set; }

    public string FromToHour { get; set; } = null!;

    public virtual Day Day { get; set; } = null!;

    public virtual Device Device { get; set; } = null!;
}
