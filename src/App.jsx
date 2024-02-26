import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Frame from "./components/frame";
import MarketingRecipes from "./components/marketingRecipes";
import MarketingTools from "./components/marketingTools";
import Goodbye from "./components/Goodbye";


function App() {
  return (
    <>
      <Navbar />
      <Frame />
      <MarketingRecipes />
      <MarketingTools />
      <Goodbye />
      <Footer />
    </>
  );
}

export default App;