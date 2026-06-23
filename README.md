# Student Management System - Frontend

A React application for managing student records using Spring Boot REST APIs.

## Features

- User Registration
- User Login
- Dashboard
- Add Student
- View Students
- Edit Student
- Delete Student
- React Router Navigation
- Fetch API Integration

## Tech Stack

- React
- JavaScript
- CSS
- React Router DOM
- Fetch API

## Project Structure

```
src
│
├── components
│     Index.jsx
│     Register.jsx
│     Login.jsx
│     Dashboard.jsx
│     Navbar.jsx
│     AddStudent.jsx
│     ViewStudents.jsx
│     EditStudent.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

## Backend URL

```
http://localhost:8080
```

## Install Dependencies

```bash
npm install
```

Install React Router:

```bash
npm install react-router-dom
```

## Run Application

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

## Available Pages

| Route | Description |
|---------|------------|
| / | Home Page |
| /register | Register User |
| /login | Login User |
| /dashboard | Dashboard |
| /addstudent | Add Student |
| /viewstudents | View Students |
| /editstudent/:rollNo | Edit Student |

## Fetch API Endpoints Used

### Users

```javascript
POST /users
GET /users
```

### Students

```javascript
POST /students
GET /students
GET /students/{rollNo}
PUT /students
DELETE /students/{rollNo}
```

---
# Student Management System - Backend

A Spring Boot REST API for managing users and students.

## Features

- User Registration
- User Login
- Add Student
- View Students
- Edit Student
- Delete Student
- MySQL Database Integration
- Spring Data JPA

## Tech Stack

- Java
- Spring Boot
- Spring Data JPA
- MySQL
- Maven

## Project Structure

```
src
 ├── controller
 ├── entity
 ├── repository
 ├── service
 └── UserprojectApplication.java
```

## Entities

### User

- email (Primary Key)
- name
- password

### Student

- rollNo (Primary Key)
- name
- branch
- cgpa

## API Endpoints

### User APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /users | Register User |
| GET | /users | Get All Users |

### Student APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /students | Add Student |
| GET | /students | View All Students |
| GET | /students/{rollNo} | Get Student |
| PUT | /students | Update Student |
| DELETE | /students/{rollNo} | Delete Student |

## Database Configuration

Update `application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/studentdb
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true


## Run Project

```bash
mvn spring-boot:run


Backend runs on:

http://localhost:8080
