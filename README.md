# E-commerce Dashboard with Advanced Features

This project is designed to provide a seamless user experience while offering dynamic and interactive functionalities. Our mission is to support both users and producers by building a secure and scalable platform.

    +-----------+               +---------+
    |  Product  | <------------ | Rating  |
    +-----------+   1 to many   +---------+
         |
         | many to many
         v
    +-----------+               +---------+
    |   Order   | <------------ |  User   |
    +-----------+   places      +---------+
         ^
         | contains
         v
    +-----------+
    |  Producer |
    +-----------+

(User and Producer communication is enabled using WebRTC/WebSockets.)

---

## Table of Contents
- **Features**
- **Technologies Used**
- **Installation**
- **Future Work**

---

## Features

### 1. Improved UI with Suspense and Skeleton Components
- **Description**: Utilizes React Suspense and Skeleton components to load user data progressively.
- **Purpose**: Enhances UI availability and ensures a smooth user experience even when data is being fetched.

### 2. Route Protection with Clerk Validations
- **Description**: Implements user authentication and authorization using Clerk to validate routes.
- **Purpose**: Ensures secure access to resources, preventing unauthorized users from viewing or modifying content.

### 3. Dynamic Routing for Product Details
- **Description**: Leverages dynamic routing to display detailed information for each product.
- **Purpose**: Provides users with a seamless navigation experience while exploring individual products.

### 4. Admin Dashboard
- **Description**: A feature-rich dashboard for administrators to manage products effectively.
- **Functionalities**:
  - Create new products.
  - Delete existing products.
  - Manage product inventory and details.

---

## Technologies Used

- **React and Next.js**: Provides server-side rendering and dynamic routing for optimal performance.
- **Clerk**: For user authentication and management, ensuring secure login and profile features.
- **Supabase**: Real-time database management using PostgreSQL, ensuring data scalability and integrity.
- **PostgreSQL**: Robust database system for handling complex queries and transactions.
- **Tailwind CSS**: Utility-first CSS framework for building custom, responsive interfaces efficiently.
- **Zod**: Schema validation for ensuring data integrity across the application.

## Screenshots

### Home Page
![Home Page](./Screenshots/homePage.png)

### Crops Page
![Crops Page](./Screenshots/DynamicRouting.png)

### Dashboard for the farmers
![Farmers Sales](./Screenshots/FarmersSales.png)

![User adding new products](./Screenshots/CreatingCrop.png)

### authorization using Clerk
![protecting routes if user doesn't signed in](./Screenshots/ProtectingRoute2.png)

![Authorization using Clerk](./Screenshots/AuthorizationUsingClerk.png)

### Single crop data
![Single Crop data ](./Screenshots/SingleProduct.png)

### Storing data on cloud using Supabase Container

![Supabase bucket storage ](./Screenshots/Screenshot%20from%202025-01-19%2019-36-29.png)
---

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/nitesh-20-2003/Ecommerce-Dashboard.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Ecommerce-Dashboard
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

---

## Future Work

### 1. One-to-Many Relationship for Ratings
- **Objective**: Enable each product to have multiple unique ratings.
- **Benefits**:
  - Allows users to rate products individually.
  - Aggregates product ratings to provide a comprehensive overview.

### 2. Cart Orders for Each Product
- **Objective**: Establish a feature where each product can be added to multiple orders.
- **Benefits**:
  - Facilitates seamless cart and checkout functionalities.
  - Tracks order history for better user insights.

### 3. AI-based Chatbot Integration
- **Objective**: Integrate an AI-powered chatbot using Dialogflow and Flask.
- **Benefits**:
  - Enhances user interaction with instant query resolution.
  - Guides users in navigating the platform and understanding features.

### 4. Real-time Communication Between Users and Producers
- **Objective**: Introduce a feature using WebRTC and WebSockets to enable direct communication between users and producers.
- **Use Cases**:
  - **Collaboration**: Facilitates partnerships and discussions for future deals.
  - **Personalized Assistance**: Users can directly discuss product details, bulk orders, or customizations with producers.

---

## ER Diagram (Proposed Relationships)

### Entities and Relationships
1. **Product**:
   - Has a one-to-many relationship with **Rating**.
   - Can be associated with multiple **Orders**.

2. **Rating**:
   - Each product can have multiple unique ratings.

3. **Order**:
   - Contains multiple products, enabling users to create customized carts.

4. **User and Producer Communication**:
   - Enabled via WebRTC and WebSockets for real-time interaction.

