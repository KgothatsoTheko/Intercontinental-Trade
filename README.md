# Intercontinental Trade System - MEAN Stack Web Application

## Overview
This project is a robust and secure Intercontinental Trade System developed using the MEAN stack (MongoDB, Express.js, Angular, Node.js). The system facilitates international payments for customers and streamlines transaction management for staff. It features two distinct user portals: a **Customer Portal** and a **Staff Portal**, each designed to meet specific user needs.

## Key Features

### Customer Portal
- **User Authentication**: Customers can register and log in securely to access their accounts.
- **International Payments**: Customers can create and view international payments using SWIFT codes and recipient account numbers.
- **Transaction Tracking**: Customers can monitor the status of their transactions (e.g., pending, approved, completed).

### Staff Portal
- **Admin Authentication**: Staff members can log in to access the admin dashboard.
- **Transaction Management**: Staff can approve, reject, or submit customer transactions to SWIFT, controlling the status of each transaction.
- **User Management**: Staff can view and manage customer accounts and transactions.

## Technologies Used
- **Frontend**: Angular (Responsive and interactive user interfaces for both portals)
- **Backend**: Node.js with Express.js (RESTful API for handling business logic and communication with the database)
- **Database**: MongoDB (NoSQL database for storing user data, transactions, and payment details)
- **Authentication**: JSON Web Tokens (JWT) for secure user authentication and authorization
- **Payment Integration**: Integration with SWIFT for international payment processing (simulated or actual, depending on project scope)
- **Hosting**: Firebase or other cloud platforms for deployment

## Key Achievements
- Designed a seamless and intuitive user experience for both customers and staff.
- Implemented secure authentication and authorization mechanisms to protect sensitive data.
- Developed a scalable backend architecture to handle multiple transactions and user requests efficiently.
- Ensured data integrity and security by leveraging MongoDB’s document-based structure and encryption practices.

## Screenshots
![1](https://github.com/user-attachments/assets/ac84dc39-553b-4357-860f-04c367b5c2ad)
![2 1](https://github.com/user-attachments/assets/3e9c537c-f2cd-472e-9c26-8a91e7910148)
![2](https://github.com/user-attachments/assets/0e9b4cf3-f851-497d-8572-818916dd09c9)
![3](https://github.com/user-attachments/assets/ada47dba-f5e7-4774-be23-3a82f44c9dc2)
![4](https://github.com/user-attachments/assets/2edb7c29-ddef-45c3-98de-3a04b0c592be)
![5](https://github.com/user-attachments/assets/90855ebb-eb92-4b2c-91e4-c6063267e112)
![6](https://github.com/user-attachments/assets/6cbf3252-8c4c-40dd-b624-359b123909ea)
![7](https://github.com/user-attachments/assets/af822f24-03af-4bbd-b828-62a3ffd9bae8)


## Live Site
[coming soon]

## Duration
October 2024 - November 2024

## Role
Full Stack Developer

## How to Run Locally

Follow these steps to set up and run the project on your local machine:

### Prerequisites
1. **Node.js**: Ensure Node.js is installed. Download it from [nodejs.org](https://nodejs.org/).
2. **MongoDB**: Install MongoDB locally or use a cloud-based MongoDB instance like MongoDB Atlas. Follow the [MongoDB installation guide](https://docs.mongodb.com/manual/installation/).
3. **Angular CLI**: Install Angular CLI globally using the following command:
   ```bash
   npm install -g @angular/cli

### Step 1: Clone the Repository
git clone https://github.com/KgothatsoTheko/Intercontinental-Trade.git
cd intercontinental-Trade

### Step 2: Set Up the Backend
cd backend
npm install
npm start

### Step 3: Set Up the Frontend
cd ../intercontinental-Trade
npm install
ng serve -open
