import { useAppSelector } from "../../redux/hooks";

// styles
import "./Board.css";

// types
import { CellProps } from "../../types";

const Cell = ({ keyCell }: CellProps) => {
  const occupiedCells = useAppSelector((state) => state.cell.occupiedCells);

  const isOccupied = occupiedCells.find((cell) => {
    return cell.coords === keyCell;
  });

  return (
    <div className="cell" id={keyCell}>
      {isOccupied && (
        <img
          src="./robot.svg"
          alt="robot"
          className={`robot ${
            isOccupied.facing === "EAST"
              ? "east"
              : isOccupied.facing === "WEST"
              ? "west"
              : isOccupied.facing === "NORTH"
              ? "north"
              : ""
          }`}
        />
      )}
    </div>
  );
};

const Board = () => {
  const rows = 5;
  const columns = 5;
  const cells = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      cells.push(<Cell key={`${i},${j}`} keyCell={`${rows - i},${j + 1}`} />);
    }
  }

  return <div className="board">{cells}</div>;
};

export default Board;
