import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "../context/userContext";
import Employee from "../pages/Employee";
import Home from "../pages/Home";

function AppRouter() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee/:id" element={<Employee />} />
          <Route path="/employee/" element={<Employee />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default AppRouter;
