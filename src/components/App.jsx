import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import { UserProvider } from "./context/userContext";
import Login from "./Login";

function App() {

    return (

        <UserProvider>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login/>} />
            </Routes>
        </UserProvider>
    
    )
  
}

export default App;