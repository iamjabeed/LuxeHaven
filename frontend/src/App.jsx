import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContentWrapper from "./components/ContentWrapper";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <ToastContainer />
      <Navigation />
      <main className="mt-[85px] contentWrapper">
        {/* <ContentWrapper> */}
        <Outlet />
        {/* </ContentWrapper> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
