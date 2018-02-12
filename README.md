# Health Care

  A Health Care system which lets you access the entire resources that play a role in affecting the health of millions of people. These resources include Medical Professionals (Doctors), Medicines, Medical test equipments and every patients medical records' history. This system was developed by a team of 4 people -[Mit Parekh](https://github.com/MitP97), [Jitendra Sachwani](https://github.com/JitendraSachwani), [Vishal Jain](https://github.com/vishaljain2610) & [Aneri Shah](https://github.com/anerishah97).
  
## The system had **four** main parts.
  - Android App for patients
  - Web Portal for:
    - Hospitals
    - Doctors
    - Pharmacy
    
## Description
- App for patients (Android using Java):
  - Features:
    - Register/Login using QRCode reading of Aadhaar Card (A national ID card of an for Indian Citizen)
    - Adding New Medical Records
    - Viewing their own entire medical history
    - Searching for:
      - Hospital by name
      - Hospital by location
      - Doctor by name
      - Doctor by speciality
      - Pharmacy for a specific medicine's availability
    - Downloading their entire medical history in the form of a document
    - Set up a video call with the doctors available at that particular instant

  - Libraries:
    - Zxing (QR Code reading)
    - Okhttp (REST Calls)


- Web Portal for Hospitals (Django backend):
  - Features:
    - Navigation of the entire website and form filling using speech to text
    - Maintaining a list of equipments they own
    - Booking the equipments available with other hospitals for use
    - Check-in for doctors when they enter the hospital to mark them available using QR Code
    - Check-out for doctors in similar fashion

  - Libraries:
    - [Instascan](https://github.com/schmich/instascan) for QR Code reader
    - [webkitSpeechRecognition](https://demo.tutorialzine.com/2017/08/converting-from-speech-to-text-with-javascript/) for speech to text conversion

- Web Portal for Doctors (Django backend):
  - Features:
    - Navigation of the entire website and form filling using speech to text
    - Add new record for the patient that visited them for consultancy
    - View the records of the particular patient
    - Video call answering for the requests made by patients

  - Dependencies:
    - [appr.tc](https://appr.tc) for setting up the video call
    - [webkitSpeechRecognition](https://demo.tutorialzine.com/2017/08/converting-from-speech-to-text-with-javascript/)

- Web Portal for Pharmacies (Django backend):
  - Features:
    - View Stock
    - Manage Stock of medicines
    - Generate Invoice and auto deduction of the stock for the same

  - Libraries:
    - [webkitSpeechRecognition](https://demo.tutorialzine.com/2017/08/converting-from-speech-to-text-with-javascript/)

## Show Stopper
  A physical **Medical Card** for every patient which mentioned the *name*, *d.o.b*, *blood group*, *emergency contact*, and a *QR code* which when scanned by any person would let them download a file of the persons medical history. The main purpose of this card is that whenever a person meets with an accident, this card serves the help to the doctors to decide the medications for a faster improvement in the health.
  
  A **Blockchain** for maintaining the records and to avoid the tampering of their personal data. Whenever the person's medical data is tried to be tempered with, it can be checked using blockchain. The node checks for the hash of the own report in other node's ledgers and if found different then it could detect the tampering and restore the data by collecting it back from other ledgers.
