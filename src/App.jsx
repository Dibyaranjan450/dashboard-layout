import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, Error, Home } from "./pages";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<Home />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
