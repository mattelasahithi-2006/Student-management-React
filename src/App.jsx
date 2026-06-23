import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./components/Index";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import ViewStudents from "./components/ViewStudents";
import EditStudent from "./components/EditStudent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/viewstudents" element={<ViewStudents />} />
        <Route path="/editstudent/:rollNo" element={<EditStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;