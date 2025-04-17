import Header from "./components/Header";
// Compare this snippet from src/components/MenuItems.tsx:
import MenuItems from "./components/MenuItems";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <MenuItems />
      </div>
    </>
  );
}

export default App;
