import "./App.css";
import Courses from "./components/courses";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;
