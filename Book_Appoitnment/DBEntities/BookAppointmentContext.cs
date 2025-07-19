using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Book_Appoitnment.DBEntities;

public partial class BookAppointmentContext : DbContext
{
    public BookAppointmentContext()
    {
    }

    public BookAppointmentContext(DbContextOptions<BookAppointmentContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Day> Days { get; set; }

    public virtual DbSet<Device> Devices { get; set; }

    public virtual DbSet<DeviceUser> DeviceUsers { get; set; }

    public virtual DbSet<DeviceWorkingHour> DeviceWorkingHours { get; set; }

    public virtual DbSet<Patient> Patients { get; set; }

    public virtual DbSet<PatientsAppointment> PatientsAppointments { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=Ahmad-Faisal;Database=Book_Appointment;Trusted_Connection=True;User Id=sa;password=20182018aa123;Integrated Security=False;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Day>(entity =>
        {
            entity.ToTable("Day");

            entity.Property(e => e.DayName).HasMaxLength(50);
        });

        modelBuilder.Entity<Device>(entity =>
        {
            entity.ToTable("Device");

            entity.Property(e => e.Description).HasMaxLength(100);
            entity.Property(e => e.DeviceName).HasMaxLength(50);
            entity.Property(e => e.Image).HasMaxLength(150);
            entity.Property(e => e.Price).HasColumnType("decimal(18, 2)");
        });

        modelBuilder.Entity<DeviceUser>(entity =>
        {
            entity.ToTable("DeviceUser");

            entity.Property(e => e.DeviceUserAge)
                .HasMaxLength(10)
                .IsFixedLength();
            entity.Property(e => e.DeviceUserFirstName).HasMaxLength(50);
            entity.Property(e => e.DeviceUserLastName).HasMaxLength(50);

            entity.HasOne(d => d.Device).WithMany(p => p.DeviceUsers)
                .HasForeignKey(d => d.DeviceId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_DeviceUser_Device");
        });

        modelBuilder.Entity<DeviceWorkingHour>(entity =>
        {
            entity.ToTable("DeviceWorkingHour");

            entity.Property(e => e.FromToHour).HasMaxLength(50);

            entity.HasOne(d => d.Day).WithMany(p => p.DeviceWorkingHours)
                .HasForeignKey(d => d.DayId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_DeviceWorkingHour_Day");

            entity.HasOne(d => d.Device).WithMany(p => p.DeviceWorkingHours)
                .HasForeignKey(d => d.DeviceId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_DeviceWorkingHour_Device");
        });

        modelBuilder.Entity<Patient>(entity =>
        {
            entity.ToTable("Patient");

            entity.Property(e => e.Email).HasMaxLength(50);
            entity.Property(e => e.FirstName).HasMaxLength(50);
            entity.Property(e => e.LastName).HasMaxLength(50);
            entity.Property(e => e.Mobile).HasMaxLength(10);
            entity.Property(e => e.Password)
                .HasMaxLength(50)
                .HasColumnName("password");
        });

        modelBuilder.Entity<PatientsAppointment>(entity =>
        {
            entity.ToTable("PatientsAppointment");

            entity.Property(e => e.Hour).HasMaxLength(50);
            entity.Property(e => e.Price).HasColumnType("decimal(18, 2)");

            entity.HasOne(d => d.Day).WithMany(p => p.PatientsAppointments)
                .HasForeignKey(d => d.DayId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_PatientsAppointment_Day");

            entity.HasOne(d => d.Patients).WithMany(p => p.PatientsAppointments)
                .HasForeignKey(d => d.PatientsId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_PatientsAppointment_Patient");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
