import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";

function App() {
  let todos = [{
    sno: 1,
    Task: "Drink Water! Rosh",
    Description: "Go and get water drink plenty of water for skin health!"
  },
  {
    sno: 2,
    Task: "Good Moring! Rosh",
    Description: "wake up and go making chai Sweet ROSH!"
  },
  {
    sno: 3,
    Task: "Go to shower! Rosh",
    Description: "Go and get shower before leaving the house!! you look beautiful Today!!"
  },
]
  return (
    <>
      <Header title="HiddenGems" searchBar={true}/>
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;