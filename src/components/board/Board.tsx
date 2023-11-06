import { CellProps } from "../../types";
import "./Board.css";

const Cell = ({ keyCell }: CellProps) => {
  return <div className="cell" id={keyCell}></div>;
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
