import "./App.css";
import { observer } from "mobx-react-lite";
import { AC } from "./components/AC";
import { BC } from "./components/BC";

const App = () => {
  return (
    <div className="container">
      <AC maxHints={3} />
      <AC maxHints={10} />
      <BC />
    </div>
  );
};

export default observer(App);
