import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import EpisodeList from './components/EpisodeList';
import './styles/trioluna_style.css'; // ajusta la ruta si lo tienes en otra carpeta

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
  <EpisodeList />
</main>

      <Footer />
    </div>
  );
}

export default App;