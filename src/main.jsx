import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./route/index.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./providers/AuthProvider.jsx";
// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
        <Toaster position="top-center" />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
