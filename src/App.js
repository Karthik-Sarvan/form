import logo from "./logo.jpeg";
import desh from "./desh.png";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import { clear } from "@testing-library/user-event/dist/clear";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Form from "./form";
import Table from "./table";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Form />} />
          <Route path="table" element={<Table />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


function Layout() {
  return (
    <div>
      {/* <h1>Welcome</h1> */}
      <Outlet /> {/* Placeholder for nested routes */}
    </div>
  );
}

function NotFound() {
  return <div>404: Page Not Found</div>;
}

export default App;
