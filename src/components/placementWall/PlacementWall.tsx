import "./PlacementWall.css";
import PlacementForm from "../placementForm/PlacementForm";
import { SubmitHandler } from "react-hook-form";
import { PlacementFormData } from "../../types";

const PlacementRobot = () => {
  const onSubmit: SubmitHandler<PlacementFormData> = (data) => {
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
