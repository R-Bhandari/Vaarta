import { BrowserRouter } from "react-router-dom";
import { Button } from "./components/ui/button"
import React from "react";
import Auth from "./pages/auth";
import Profile from "./pages/profile";
import Chat from "./pages/chat";
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<AuthNavigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
