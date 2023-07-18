import ModalComponent from "./components/modal/modal";
import DetailPage from "./pages/detailPage";
import Mainpage from "./pages/mainPage";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <ModalComponent />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
