import { SidePanel } from "./components/SidePanel";
import { MainContent } from "./components/MainContent";


function App() {
  return (
    <div className="flex flex-row">
      <SidePanel/>
      <MainContent/>
    </div>
  );
}

export default App;
