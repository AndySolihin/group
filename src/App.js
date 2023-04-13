import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainGroup from "./features/tasks/MainGroup";
import AddGroup from "./features/tasks/AddGroup";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <div className="w-14 h-screen">
          <Sidebar />
        </div>
        <div className="w-full">
          <div>
            <Header />
          </div>
          <main>
            <Routes>
              <Route path="/" element={<MainGroup />} />
              <Route path="/create-task" element={<AddGroup />} />
              <Route path="/edit-task/:id" element={<AddGroup />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
