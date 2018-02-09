from __future__ import unicode_literals
from django.shortcuts import render
import json,os
from django.views.decorators.csrf import csrf_exempt
from .models import *
from django.http import HttpResponseRedirect, HttpResponse

# Create your views here.
@csrf_exempt
def PatientRegister(request):
    aadhaarid = request.POST.get('aadhaarid')
    name = request.POST.get('name')
    dob = request.POST.get('dob')
    address = request.POST.get('address')
    gender = request.POST.get('gender')
    contact = request.POST.get('contact')
    patient = Patients()
    patient.aadhaarid = aadhaarid
    patient.name = name
    patient.dob = dob
    patient.address = address
    patient.gender = gender
    patient.contact = contact
    patient.save()
    response_array = {}
    response_array['status'] = 1
    response_array['data'] = 'success'
    return HttpResponse(json.dumps(response_array), status=200, content_type="application/json")

@csrf_exempt
def FetchPatientDetails(request):
    aadhaarid = request.GET.get('aadhaarid')
    patient = Patients.objects.get(aadhaarid=aadhaarid)
    response_array = {}
    response_array['status'] = 1
    response_array['data'] = {}
    response_array['data']['aadhaarid'] = patient.aadhaarid
    response_array['data']['name'] = patient.name
    response_array['data']['dob'] = patient.dob
    response_array['data']['address'] = patient.address
    response_array['data']['gender'] = patient.gender
    response_array['data']['contact'] = patient.contact
    return HttpResponse(json.dumps(response_array), status=200, content_type="application/json")

@csrf_exempt
def GetAllPatientRecords(request):
    aadhaarid = request.GET.get('aadhaarid')
    patientRecord = Patientrecords.objects.get(patient=Patients.objects.get(aadhaarid=aadhaarid))
    response_array = {}
    response_array['status'] = 1
    response_array['data'] = {}
    response_array['data']['symptoms'] = patientRecord.symptoms
    response_array['data']['diagnosis'] = patientRecord.diagnosis
    response_array['data']['addedby'] = patientRecord.addedby
    response_array['data']['attatchmentlink'] = patientRecord.attatchmentlink
    response_array['data']['createdat'] = patientRecord.createdat
    response_array['data']['createdon'] = patientRecord.createdon
    response_array['data']['id'] = patientRecord.id
    return HttpResponse(json.dumps(response_array), status=200, content_type="application/json")
