 App.jsx
import "./App.css";
import Header from "./components/Header";
import Student from "./components/Student";
import Eligibility from "./components/Eligibility";
import Placements from "./components/Placements";
import Companyoffer from "./components/Companyoffer";
import Skillprogress from "./components/Skillprogress";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Student />
      <Eligibility />
      <Placements />
      <Companyoffer />
      <Skillprogress />
      <Footer />
    </div>
  );
}

export default App;
