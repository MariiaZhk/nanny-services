import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Nannies from "../pages/Nannies/Nannies";
import Favorites from "../pages/Favorites/Favorites";
import { Layout } from "./Layout/Layout";

import PrivateRoute from "../routesConfig/PrivateRoute";
import { Loader } from "./Loader/Loader";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../redux/selectors";

function App() {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading && <Loader />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nannies" element={<Nannies />} />
          <Route
            path="favorites"
            element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
