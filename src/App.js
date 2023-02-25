import logo from "./logo.svg";
import "./App.css";
import TodoPage from "./pages/TodoPage/TodoPage";
import FollowerPage from "./pages/FollowerPage/FollowerPage";
import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner/Banner";



function App() {
  return (
    <div className="App">
      <Banner />

      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/followers" element={<FollowerPage />} />
      </Routes>
    </div>
  );
}

export default App;
