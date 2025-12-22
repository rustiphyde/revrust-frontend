import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <p style={{ color: 'red' }}>DEV BUILD TEST</p>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
