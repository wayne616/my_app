import Nav from './components/Nav'
import Projet from './components/Projet'
import Skils from './components/Skills'

import './styles/App.css';

import logo from './assets/logo2.png';

export default function App() {
  return (
    <div className="App">
      <header id="header">
        <img id="logo" src={logo} alt="" />
            <h1 id='logo-h1'>&lsaquo;  &#47; &rsaquo; Ryuk</h1>
          <Nav />
      </header>
      <Skils />
      <Projet />
    </div>
  );
}
