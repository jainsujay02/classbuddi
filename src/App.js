// import logo from "./logo.svg";
import "./App.css";
// import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Header.js";
import ErrorComponent from "./components/ErrorComponent";
import  Dashboard from "./components/Dashboard.js";
import SearchLanding from "./components/SearchLanding.js"
import ProfileForm from "./components/profileform";
import About from "./components/About"
import ProfileOtherBackground from "./components/ProfileOtherBackground"
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./components/hooks/useAuth";
import CourseForm from "./components/CoursePage";
import ProfileBackground from "./components/ProfileBackground";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/join" element={<ErrorComponent />}></Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <SearchLanding />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/coursepage"
          element={
            <ProtectedRoute>
              <CourseForm/>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/profileform"
          element={
            <ProtectedRoute>
              <ProfileForm />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfileBackground />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/other/:id"
          element={
            <ProtectedRoute>
              <ProfileOtherBackground />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
      <Footer></Footer>
    </AuthProvider>
  );
}

export default App;
