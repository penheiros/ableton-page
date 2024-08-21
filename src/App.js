import './App.css';
import './responsive.css';
import Header from './components/header/header';
import About from './components/about-page/about';
import Footer from './components/footer/footer';

function App() {
  return <>

    <div className="App">
      <Header/>
      <About/>
      <Footer/>
    </div>
  </>;
}

export default App;
