import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Noticias from "./pages/Noticias";
import Ebook from "./pages/Ebook";
import Cadastrar from "./pages/Cadastrar";
import Footer from "./components/footer";
import Criar from "./pages/Criar";
import HomePage from "./pages/PageHome";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") { 
      setIsAuthenticated(true);
    } else {
      alert("Usuário ou senha incorretos");
    }
  };

  if (!isAuthenticated) {
    
    return (
      <>
        <br/>

        <h1 id="title">Login ADM</h1>
        <br/>
      <div  className="container_admin">

        <form onSubmit={handleLogin}>
          <div>
            <label>Usuário:</label>
            <input
              id="input_user"
              placeholder="User:"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Senha:</label>
            <input
              id="input_user"
              placeholder="Senha:"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        <br/>

          <button type="submit">Entrar</button>
        </form>
      </div>
      </>
    );
  }

  return (
    <BrowserRouter>
      <div id="root">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gu" element={<Home />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/ebook" element={<Ebook />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
            <Route path="/criar" element={<Criar />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
