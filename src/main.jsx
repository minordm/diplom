import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// схема
import BodyScheme from "./layout/Main/BodyScheme/BodyScheme";
import RightPanel from "./layout/Main/RightPanel/RightPanel";
import Diagrama from "./components/Main/Diagrama/Diagrama";
import AlertList from "./components/Main/AlertList/AlertList";

// странички
import Error from "./components/Error/Error.jsx";
import GraphicPage from './pages/GraphicPage/GraphicPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    children: [ 
      {
        path: '/',
        element: (
            <div className="main-page">
              <BodyScheme />
              <RightPanel>
                <Diagrama />
                <AlertList />
              </RightPanel>
            </div>
          ),
      },
      {
        path: '/graphic',
        element: <GraphicPage />,
      }
    ]
  },
  {
    path: "*",
    element: <Error />
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
