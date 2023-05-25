import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/Home";
import RequiredAuth from "./components/shared/RequiredAuth";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Landing from "./pages/landing/Landing";

const privateRoutes = [
  {
    path: "/",
    component: <Home />,
  },
];

function App() {
  return (
    <Routes>
      {privateRoutes.map(({ path, component }, idx) => {
        return (
          <Route
            key={idx}
            path={path}
            //@ts-expect-error not a jsx
            element={<RequiredAuth children={component} />}
          />
        );
      })}
      <Route path='landing' element={<Landing />} />
      <Route path='auth/:id' element={<Login />} />
      {/* <Route path='auth' element={<Register />} /> */}
    </Routes>
  );
}

export default App;
