import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/router';
import './Styles/custom.css';

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);