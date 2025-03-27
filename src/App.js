import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import "./index.css";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen";
import NewFooter from "./components/NewFooter/NewFooter";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Header />
      <div style={{ marginTop: "5em" }}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<HomeScreen />} />
          <Route path="*" element={<HomeScreen />} />
        </Routes>
        <NewFooter />
      </div>
    </>
  );
}

export default App;
