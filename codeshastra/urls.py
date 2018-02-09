from django.conf.urls import url
from django.contrib import admin
from health import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^PatientRegister/$', views.PatientRegister),
    url(r'^FetchPatientDetails/$', views.FetchPatientDetails),
    url(r'^GetAllPatientRecords/$', views.GetAllPatientRecords),
    url(r'^CreateNewPatientRecord/$', views.CreateNewPatientRecord),
    url(r'^SearchDoctor/$', views.SearchDoctor),
    url(r'^SearchDoctorBySpeciality/$', views.SearchDoctorBySpeciality),
    url(r'^SearchDoctorByHospitalName/$', views.SearchDoctorByHospitalName),
    url(r'^EmergencyDoctorSearch/$', views.EmergencyDoctorSearch),
    url(r'^CreateNewVidChatRoom/$', views.CreateNewVidChatRoom),
    url(r'^DoctorRegister/$', views.DoctorRegister),
    url(r'^DoctorLogin/$', views.DoctorLogin),
    url(r'^DoctorLanding/$', views.DoctorLanding),
    url(r'^DoctorAddRecord/$', views.DoctorAddRecord),
    url(r'^PharmacyRegister/$', views.PharmacyRegister),
    url(r'^PharmacyLogin/$', views.PharmacyLogin),
    url(r'^PharmacyLanding/$', views.PharmacyLanding),
    url(r'^PharmacyAddMedicine/$', views.PharmacyAddMedicine),
    url(r'^HospitalRegister/$', views.HospitalRegister),
    url(r'^HospitalLogin/$', views.HospitalLogin),
    url(r'^HospitalLanding/$', views.HospitalLanding),
    url(r'^HospitalAddEquipment/$', views.HospitalAddEquipment),

]
##https://docs.google.com/spreadsheets/d/17h_0u0yPnQ5wdWeGVkIJYXaPxgbqdSo_zsoB_OzR9Oc/edit?usp=sharing
