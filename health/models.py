# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from __future__ import unicode_literals

from django.db import models


class Doctors(models.Model):
    available = models.CharField(max_length=1)
    name = models.CharField(max_length=100)
    speciality = models.CharField(max_length=500)
    currentlocation = models.IntegerField()
    password = models.CharField(max_length=50)
    username = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'doctors'


class Equipments(models.Model):
    name = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'equipments'


class Equipmentsavailable(models.Model):
    equipment = models.ForeignKey(Equipments, models.DO_NOTHING, db_column='equipment')
    hospital = models.ForeignKey('Hospitals', models.DO_NOTHING, db_column='hospital')
    available = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'equipmentsavailable'


class Hospitals(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    name = models.CharField(max_length=500)
    location = models.CharField(max_length=500)
    address = models.CharField(max_length=500)

    class Meta:
        managed = False
        db_table = 'hospitals'


class Medicines(models.Model):
    name = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'medicines'


class Medicinestocks(models.Model):
    medicine = models.ForeignKey(Medicines, models.DO_NOTHING, db_column='medicine')
    pharmacy = models.ForeignKey('Pharmacies', models.DO_NOTHING, db_column='pharmacy')
    quantity = models.CharField(max_length=10)

    class Meta:
        managed = False
        db_table = 'medicinestocks'


class Patientrecords(models.Model):
    patient = models.ForeignKey('Patients', models.DO_NOTHING, db_column='patient')
    symptoms = models.CharField(max_length=500)
    diagnosis = models.CharField(max_length=500)
    addedby = models.ForeignKey(Doctors, models.DO_NOTHING, db_column='addedby')
    attatchmentlink = models.CharField(max_length=500)
    createdat = models.CharField(max_length=500)
    createdon = models.CharField(max_length=500)

    class Meta:
        managed = False
        db_table = 'patientrecords'


class Patients(models.Model):
    aadhaarid = models.CharField(primary_key=True, max_length=12)
    name = models.CharField(max_length=100)
    dob = models.CharField(max_length=20)
    address = models.CharField(max_length=500)
    gender = models.CharField(max_length=1)
    contact = models.CharField(max_length=10)

    class Meta:
        managed = False
        db_table = 'patients'


class Pharmacies(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    address = models.CharField(max_length=500)
    name = models.IntegerField()
    timing = models.CharField(max_length=100)
    location = models.CharField(max_length=500)

    class Meta:
        managed = False
        db_table = 'pharmacies'


class Videorecords(models.Model):
    patient = models.ForeignKey(Patients, models.DO_NOTHING, db_column='patient')
    doctor = models.ForeignKey(Doctors, models.DO_NOTHING, db_column='doctor', blank=True, null=True)
    createdat = models.CharField(max_length=500)

    class Meta:
        managed = False
        db_table = 'videorecords'
