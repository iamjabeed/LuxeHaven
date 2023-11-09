import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContentWrapper from "./components/ContentWrapper";

function App() {
  return (
    <>
      <ToastContainer />
      <Navigation />
      <main className="mt-[80px] contentWrapper pb-[1000px]">
        {/* <ContentWrapper> */}
        <Outlet />
        {/* </ContentWrapper> */}
      </main>
    </>
  );
}

export default App;
