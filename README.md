# fleet-management-react-app

# 🚗 Mini Fleet Management React App

A mini fleet management application built using **React** focusing on authentication, routing, CRUD operations, and performance optimization.

---

## 📌 Project Objective

This project demonstrates:
-   React fundamentals and hooks
-   Protected routes with authentication
-   Fleet CRUD operations
-   Performance optimization using memoization

---

## 🛠 Tech Stack

-   React 18
-   React Router DOM v6
-   Vite
-   JavaScript
-   CSS

---

## 📂 Folder Structure

```
src/
├── components/
│   ├── FleetCard.jsx
│   └── ProtectedRoute.jsx
├── pages/
│   ├── Login.jsx
│   └── Admin.jsx
├── App.jsx
├── main.jsx
└── styles.css
```

---

## 🔐 Login Credentials

-   Email: [###############]
-   Password: admin1234

---

## 🧭 Routes

/login → Public Login Page
/admin → Protected Admin Dashboard

Unauthenticated users are redirected to `/login`.

---

## ➕ Add Fleet

Fields:
-   Vehicle Registration Number
-   Category (Auto, Car, Truck, Bus)
-   Driver Name
-   Availability Status

All fields are mandatory.

---

## 🚘 Fleet Card Actions

-   Update Driver (prompt input)
-   Toggle Availability
-   Delete Vehicle (confirmation required)

---

## ⚡ Performance Optimization

-   FleetCard extracted into a separate component
-   Wrapped with React.memo
-   Handlers optimized using useCallback

Only the updated card re-renders.

---

## ▶️ Run Project

npm install
npm run dev

---

## 👨‍💻 Author

Rohini Tiwari
