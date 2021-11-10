import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./ui";
import { Header, Footer } from "./layout";
import { Home, Err404, Contacts, Admin } from "./pages";
import { WilderRow } from "./business";

function App() {
  return (
    <>
      <Header />
      <WilderRow />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Err404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
