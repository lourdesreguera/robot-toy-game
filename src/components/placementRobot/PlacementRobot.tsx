import { SubmitHandler } from "react-hook-form";

// custom
import PlacementForm from "../placementForm/PlacementForm";
import {
  addRobot,
  moveRobot,
  setOccupiedCellDialog,
} from "../../redux/reducers/cellSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

// styles
import "./PlacementRobot.css";

// types
import { PlacementFormData } from "../../types";
import CustomDialog from "../dialog/CustomDialog";

const PlacementRobot = () => {
  const dispatch = useAppDispatch();
  const isDialogOpen = useAppSelector(
    (state) => state.cell.occupiedCellDialogOpen
  );
  const selectedCell = useAppSelector(
    (state) => state.cell.selectedCell
  );

  const onSubmit: SubmitHandler<PlacementFormData> = (data) => {
    const coords = `${data.row},${data.column}`;
    const facingDir = data.facing;
    dispatch(addRobot({ coords, facingDir }));
  };

  const onSubmitNewPlace: SubmitHandler<PlacementFormData> = (data) => {
    const coords = `${data.row},${data.column}`;
    const facingDir = data.facing;
    dispatch(moveRobot({ coords, facingDir }));
    dispatch(setOccupiedCellDialog());

  };

  const handleClose = () => {
    dispatch(setOccupiedCellDialog());
  };

  return (
    <>
      <section className="container">
        <h2>Place your robot</h2>
        <PlacementForm onSubmit={onSubmit} facingEnabled={true} />
      </section>
      {isDialogOpen && (
        <CustomDialog
          open={isDialogOpen}
          handleClose={handleClose}
          title={
            "This cell is already occupied. Please chose a new location for this robot:"
          }
        >
          <PlacementForm onSubmit={onSubmitNewPlace} facingEnabled={true} />
        </CustomDialog>
      )}
    </>
  );
};

export default PlacementRobot;
