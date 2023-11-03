import "./PlacementRobot.css";
import PlacementForm, { FormData } from "../placementForm/PlacementForm";

const PlacementRobot = () => {
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section className="container">
      <h2>Place your robot</h2>
      <PlacementForm onSubmit={onSubmit} facingEnabled={true} />
    </section>
  );
};

export default PlacementRobot;
