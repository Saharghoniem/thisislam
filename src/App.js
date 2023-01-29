import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Logo from "./pages/Logo";
import Second from "./pages/Second";
import Forth from "./pages/Forth";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import Third from "./pages/Third";
import First from "./pages/First";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Logo />,
    errorElement: <Logo />,
  },
  


  {
    path: "/First",
    element: <First/>,
  },

  {
    path: "/Second",
    element: <Second />,
  },

 
  {
    path: "/Third",
    element: <Third />,
  },
  {
    path: "/Forth",
    element: <Forth/>,
  },
  
  
]);

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
