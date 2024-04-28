import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routes from "./routes/routes";
import { AuthProvider } from "./hooks/auth";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-zinc-800 min-h-screen w-screen">
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  </React.StrictMode>
);
