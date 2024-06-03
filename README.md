# Doctor Appointment Booking Application

This project is a simple doctor appointment booking application built with React. It allows users to search for doctors, view details, and book appointments. The application uses React Bootstrap for styling and local storage to save the state of appointments.

![Doctor Appointment Booking Demo](https://github.com/MaralTach/hospital-app/raw/master/12-HD-720p.gif)

## Features

- Search for doctors
- View doctor details in a modal
- Book appointments
- Save appointments to local storage

## Demo

Check out the live demo: [Hospital App](https://hospital-app-topaz.vercel.app)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/doctor-appointment-booking.git
    ```

2. Navigate to the project directory:

    ```sh
    cd doctor-appointment-booking
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

4. Start the development server:

    ```sh
    npm start
    ```

The application should now be running on `http://localhost:3000`.

## Usage

### Searching for Doctors

1. Type the name of the doctor in the search input field.
2. The list of doctors will be filtered based on the search query.

### Booking an Appointment

1. Click on the doctor's name to open a modal with their details.
2. Fill in the patient name and select a day for the appointment.
3. Click on the "Book Appointment" button to save the appointment.
4. The appointment will be saved to local storage and displayed in the list of appointments.

## Code Overview

### Components

- **Home**: The main component that handles the state and renders the search input, doctor list, and appointment modal.

### State Management

- `search`: Stores the current search query.
- `show`: Controls the visibility of the modal.
- `selectedDoctor`: Stores the currently selected doctor's details.
- `list`: Stores the filtered list of doctors based on the search query.
- `patient`: Stores the name of the patient for the appointment.
- `day`: Stores the selected day for the appointment.
- `appointments`: Stores the list of appointments, which is saved to local storage.

### Functions

- `useEffect`: Used to filter the list of doctors based on the search query.
- `setSearch`: Updates the search query state.
- `setShow`: Toggles the visibility of the modal.
- `setSelectedDoctor`: Sets the currently selected doctor's details.
- `setList`: Updates the list of filtered doctors.
- `setPatient`: Updates the patient name state.
- `setDay`: Updates the selected day state.
- `setAppointments`: Updates the appointments state and saves it to local storage.


