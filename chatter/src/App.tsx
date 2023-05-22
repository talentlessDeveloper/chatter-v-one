import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/Home";
import RequiredAuth from "./components/shared/RequiredAuth";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

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

      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
    </Routes>
  );
}

export default App;
