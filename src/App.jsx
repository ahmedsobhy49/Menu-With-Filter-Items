import { useState } from "react";
import FilteringButtons from "./FilteringButtons";
import Header from "./Header";
import Menu from "./Menu";
import menu from "./data";
const App = () => {
  const [menuData, setMenuData] = useState(menu);

  function filterMenu(category = "all") {
    if (category === "all") {
      setMenuData(menu);
      return;
    }
    const filterdMenu = menu.filter((item) => item.category === category);
    setMenuData(filterdMenu);
  }
  return (
    <div className="menu">
      <Header />
      <FilteringButtons filterMenu={filterMenu} />
      <Menu menuData={menuData} />
    </div>
  );
};
export default App;
