import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// схема
import BodyScheme from "./layout/Main/BodyScheme/BodyScheme";
import RightPanel from "./layout/Main/RightPanel/RightPanel";
import Diagrama from "./components/Main/Diagrama/Diagrama";
import AlertList from "./components/Main/AlertList/AlertList";
// график
import LeftPanel from "./layout/Graphic/LeftPanel/LeftPanel.jsx";
import ParametrItem from './components/Graphic/ParametrItem/parametrItem.jsx';
import ParametrList from "./components/Graphic/ParametrList/ParametrList.jsx";
import Barrel from "./components/Graphic/Barrel/Barrel.jsx";
import Body from "./layout/Graphic/Body/Body.jsx";
import { LineGraph } from "./components/Graphic/Graphics/Line.jsx";
import AlertPanel from "./components/Graphic/AlertPanel/AlertPanel.jsx";
// странички
import Error from "./components/Error/Error.jsx";
import Layout from './layout/Page/Page.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        element: (
          <div className="graphic-page">
            <LeftPanel>
              <ParametrItem
                name="Параметр"
                value="Величина"
                unit="Ед. изм."
                isHead="yes"
              />
              <ParametrList />
              <Barrel />
            </LeftPanel>
            <Body>
              <LineGraph />
              <AlertPanel />
            </Body>
          </div>
        ),
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
