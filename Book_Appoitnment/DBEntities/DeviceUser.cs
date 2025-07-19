using System;
using System.Collections.Generic;

namespace Book_Appoitnment.DBEntities;

public partial class DeviceUser
{
    public int DeviceUserId { get; set; }

    public string DeviceUserFirstName { get; set; } = null!;

    public string DeviceUserLastName { get; set; } = null!;

    public string DeviceUserAge { get; set; } = null!;

    public int DeviceId { get; set; }

    public virtual Device Device { get; set; } = null!;
}
