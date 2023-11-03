import Board from "./components/board/Board";
import "./App.css";
import PlacementRobot from "./components/placementRobot/PlacementRobot";
import PlacementWall from "./components/placementWall/PlacementWall";

function App() {
  return (
    <div className="container">
      <Board />
      <section>
        <PlacementRobot />
        <PlacementWall />
      </section>
    </div>
  );
}

export default App;
