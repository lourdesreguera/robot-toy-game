import "./PlacementRobot.css";
import PlacementForm from "../placementForm/PlacementForm";
import { SubmitHandler } from "react-hook-form";
import { PlacementFormData } from "../../types";

const PlacementRobot = () => {
  const onSubmit: SubmitHandler<PlacementFormData> = (data) => {
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
