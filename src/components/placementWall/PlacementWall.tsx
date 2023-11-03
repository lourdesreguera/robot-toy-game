import "./PlacementWall.css";
import PlacementForm, { FormData } from "../placementForm/PlacementForm";

const PlacementRobot = () => {
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section className="container">
      <h2>Place a wall</h2>
      <PlacementForm onSubmit={onSubmit} />
    </section>
  );
};

export default PlacementRobot;
