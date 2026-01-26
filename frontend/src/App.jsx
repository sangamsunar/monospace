import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import NoteDetailPage from "./pages/NoteDetailPage.jsx";
import toast from "react-hot-toast";
function App() {
  return (
    <div className="relative h-full w-full">
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
      {/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" /> */}

      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="/Create" element={<CreatePage />}></Route>

        <Route path="/note/:id" element={<NoteDetailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
