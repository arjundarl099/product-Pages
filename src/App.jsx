import Body from "./Components/Body";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Headers from "./Components/Headers";
import Password from "./Components/Password";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tools from "./Components/Tools";
import Api from "./Components/Api";

const App = () => {
  return (
    <BrowserRouter>
        <Headers />
      <Routes>
        <Route
          path="/"
          element={
            <>
              
              <Body />
              <Password />
              <Faq />
              
            </>
          }
        />

        <Route path="/tools" element={<Tools />} />
        <Route path="/api" element={<Api />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;