// import logo from './logo.svg';
import "./App.css";
import Footer from "./components/Footer/index.tsx";
import Header from "./components/Header/index.tsx";
import Enjoy from "./page-block/Enjoy/index.tsx";
import InfoBanner from "./page-block/InfoBanner/index.tsx";
import Quality from "./page-block/Quality/index.tsx";
import Recipes from "./page-block/Recipes/index.tsx";
import Purchase from "./page-block/Purchase/index.tsx";
import Customer from "./page-block/Customer/index.tsx";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Enjoy />
        <InfoBanner />
        <Quality />
        <Recipes />
        <Purchase />
        <Customer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
