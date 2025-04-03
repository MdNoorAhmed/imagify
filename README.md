# Text-to-Image AI Generator (MERN Stack SaaS Application)

[![Live Demo](https://img.shields.io/badge/Demo-Live-green)](https://your-frontend-url.vercel.app)
[![GitHub Stars](https://img.shields.io/github/stars/yourusername/your-repo)](https://github.com/yourusername/your-repo/stargazers)

A full-stack SaaS application that converts text prompts into AI-generated images using **Clipdrop API**, React.js, and Node.js. Includes user authentication, credit-based payment system, and image management.

![Application Preview](https://github.com/user-attachments/assets/71b62022-279c-40d4-bf76-3723e8b43be5)

## Key Features

- **AI Image Generation**  
  Generate realistic images from text prompts using [Clipdrop API](https://clipdrop.co/apis)
- **Credit System**  
  Purchase credits via Razorpay integration (test/payment mode)
- **User Authentication**  
  JWT-based secure login/registration
- **Image Gallery**  
  Store and manage generated images
- **Rate Limiting**  
  Prevent API abuse with credit-based restrictions

## Tech Stack

**Frontend**  
- React.js + Vite
- Tailwind CSS
- Axios
- Framer Motion (Animations)
- React Toastify

**Backend**  
- Node.js + Express
- MongoDB + Mongoose
- JSON Web Tokens
- Razorpay Payment Gateway

**AI Service**  
- [Clipdrop Text-to-Image API](https://clipdrop.co/apis/docs/text-to-image)

## Application Preview

| Feature | Screenshot |
|---------|------------|
| **Homepage** | <img width="1409" alt="Homepage" src="https://github.com/user-attachments/assets/71b62022-279c-40d4-bf76-3723e8b43be5"> |
| **Image Generation** | <img width="1371" alt="Login" src="https://github.com/user-attachments/assets/b28f7039-43aa-4b21-a4a3-5fb1a5405233"> |
| **Plan Page** | <img width="845" alt="Generation" src="https://github.com/user-attachments/assets/c783eb75-cf82-4677-88b6-e0905fe9324e"> |
| **How it Works** | <img width="950" alt="Payment" src="https://github.com/user-attachments/assets/117c39e2-bd43-4542-a53e-dc70df76b417"> |
| **Dashboard** | <img width="1233" alt="Dashboard" src="https://github.com/user-attachments/assets/53d362c9-5920-497d-be13-ff5c9e4f45a8"> |
| **Sign Up** | <img width="400" alt="Mobile" src="https://github.com/user-attachments/assets/1984e6d2-f500-4633-bf27-ecc4d1643acb"> |

## Installation Guide

1. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
