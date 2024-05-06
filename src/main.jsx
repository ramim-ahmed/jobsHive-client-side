import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./route/index.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={routes} />
  </QueryClientProvider>
);
