import Header from "./components/Header";
// Compare this snippet from src/components/MenuItems.tsx:
import MenuItems from "./components/MenuItems";
import "./App.css";
import TodoList from "./components/Todos";

function App() {
  return (
    <>
      <Header />
      <MenuItems />
      <TodoList />
    </>
  );
}

export default App;
