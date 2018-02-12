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
    url(r'^SearchHospitalByName/$', views.SearchHospitalByName),
    url(r'^EmergencyDoctorSearch/$', views.EmergencyDoctorSearch),
    url(r'^CreateNewVidChatRoom/$', views.CreateNewVidChatRoom),
    url(r'^DoctorRegister/$', views.DoctorRegister),
    url(r'^DoctorLogin/$', views.DoctorLogin),
    url(r'^DoctorLanding/$', views.DoctorLanding),
    url(r'^DoctorLanding2/$', views.DoctorLanding2),
    url(r'^DoctorAddRecord/$', views.DoctorAddRecord),
    url(r'^PharmacyRegister/$', views.PharmacyRegister),
    url(r'^PharmacyLogin/$', views.PharmacyLogin),
    url(r'^PharmacyLanding/$', views.PharmacyLanding),
    url(r'^PharmacyAddMedicine/$', views.PharmacyAddMedicine),
    url(r'^PharmacyInvoice/$', views.PharmacyInvoice),
    url(r'^PharmacyInvoiceGenerator/$', views.PharmacyInvoiceGenerator),
    url(r'^HospitalRegister/$', views.HospitalRegister),
    url(r'^HospitalLogin/$', views.HospitalLogin),
    url(r'^HospitalLanding/$', views.HospitalLanding),
    url(r'^HospitalAddEquipment/$', views.HospitalAddEquipment),
    url(r'^HospitalBookEquipment/$', views.HospitalBookEquipment),
    url(r'^DoctorCheckIn/$', views.DoctorCheckIn),
    url(r'^DoctorCheckOut/$', views.DoctorCheckOut),
    url(r'^ReportGeneration/$', views.ReportGeneration),
]
