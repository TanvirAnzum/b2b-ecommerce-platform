import { RouterProvider } from "react-router-dom";
import router from "./routers/router";
import Layout from "./ui/Layout";

function App() {
  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  );
}

export default App;
