using System;
using System.Collections.Generic;

namespace Book_Appoitnment.DBEntities;

public partial class Device
{
    public int DeviceId { get; set; }

    public string DeviceName { get; set; } = null!;

    public string Description { get; set; } = null!;

    public decimal Price { get; set; }

    public string Image { get; set; } = null!;

    public virtual ICollection<DeviceUser> DeviceUsers { get; set; } = new List<DeviceUser>();

    public virtual ICollection<DeviceWorkingHour> DeviceWorkingHours { get; set; } = new List<DeviceWorkingHour>();
}
