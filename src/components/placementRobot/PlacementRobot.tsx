import { SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";

// custom
import PlacementForm from "../placementForm/PlacementForm";
import { addRobot } from "../../redux/reducers/cellSlice";

// styles
import "./PlacementRobot.css";

// types
import { PlacementFormData } from "../../types";

const PlacementRobot = () => {
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<PlacementFormData> = (data) => {
    const cellId = `${data.row},${data.column}`;
    const facingDir = data.facing;
    dispatch(addRobot({cellId, facingDir}));
  };


  return (
    <section className="container">
      <h2>Place your robot</h2>
      <PlacementForm onSubmit={onSubmit} facingEnabled={true} />
    </section>
  );
};

export default PlacementRobot;
