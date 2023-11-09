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
      <main className="mt-[100px] contentWrapper border border-red-700">
        {/* <ContentWrapper> */}
        <Outlet />
        {/* </ContentWrapper> */}
      </main>
    </>
  );
}

export default App;
