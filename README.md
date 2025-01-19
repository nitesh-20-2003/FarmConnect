# FarmConnect

FarmConnect is a platform designed to connect farmers with consumers, providing a marketplace for fresh, locally-sourced produce. Our mission is to support sustainable agriculture and promote healthy eating by making it easier for people to access farm-fresh products.

## Table of Contents
- **Features**
- **Technologies Used**
- **Project structure**
- **Future work to be done**


## Features
- **Marketplace**: Browse and purchase a variety of fresh produce directly from local farmers.
- **Farmer Profiles**: Learn more about the farmers and their farming practices.
- **Order Tracking**: Keep track of your orders and delivery status.
- **Secure Payments**: Safe and secure payment options for a hassle-free shopping experience.

## Installation

To get started with FarmConnect, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/nitesh-20-2003/FarmConnect.git
    ```
2. Navigate to the project directory:
    ```bash
    cd FarmConnect
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```
## Technologies Used
- **Next.js**: We chose Next.js for its powerful features like server-side rendering and static site generation, which improve performance and SEO for our web application.
-**Typescript**:To provide type security to the project instead of javascript to scale the project to higher level.
- **Clerk**: Clerk is used for user authentication and management, providing a seamless and secure way for users to sign up, log in, and manage their profiles.
- **shadcn/ui**: This library offers a collection of accessible and customizable UI components, helping us build a consistent and visually appealing user interface.
- **Supabase**: Supabase is an open-source alternative to Firebase, offering real-time database capabilities and authentication using PostgreSQL, which ensures data integrity and scalability.
- **PostgreSQL**: We use PostgreSQL as our database system due to its robustness, scalability, and support for complex queries and transactions.
- **Tailwind CSS**: Tailwind CSS allows us to rapidly build custom user interfaces with its utility-first approach, making the styling process more efficient and maintainable.
- **Zod**: Zod is used for schema declaration and validation, ensuring that our data is correctly structured and validated throughout the application.

## Workflow
### User Authentication and Authorization
- Users must sign up or log in using Clerk to access the application.
Clerk ensures secure user management with features like passwordless authentication and multi-factor authentication (MFA).
Only authenticated users can access restricted pages, providing a secure and personalized experience.
### Admin Access
The admin user has exclusive access to the dashboard.
Admins can create and manage various entities, such as farms, crops, or other relevant data.
Admins can add, update, and delete data in the system.
### Data Presentation
All data is dynamically fetched from Supabase (powered by PostgreSQL) and displayed across various pages of the application.
Pages are designed to present data in an organized way, including detailed statistics, charts, and metrics for actionable insights.
### Real-Time Updates
Supabase's real-time capabilities ensure that changes to the data are instantly reflected across the application.
Users always see the most up-to-date information without needing to refresh the page manually.
### UI/UX Design
The application interface is built using shadcn/ui and Tailwind CSS, providing a consistent and visually appealing user experience.
The design is fully responsive, ensuring seamless functionality across all devices.
### Form Validation and Type Safety
Forms and inputs are validated using Zod to ensure data correctness and prevent invalid submissions.
TypeScript is used throughout the project, providing type safety, reducing runtime errors, and making the application scalable for future development.

