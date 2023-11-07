import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface Cell {
  id: string
  isFree: boolean
  itemInCell: 'robot' | 'wall' | null
  facing?: 'NORTH' | 'SOUTH' | 'WEST' | 'EAST'
}

interface CellState {
  occupiedCells: Cell[]
  selectedCell: Cell
}

interface AddRobotPayload {
  cellId: string
  facingDir: 'NORTH' | 'SOUTH' | 'WEST' | 'EAST' | undefined
}

const initialState: CellState = {
  occupiedCells: [],
  selectedCell: {
    id: '',
    isFree: true,
    itemInCell: null
  }
}

export const cellSlice = createSlice({
  name: 'cell',
  initialState,
  reducers: {
    addRobot: (state, action: PayloadAction<AddRobotPayload>) => {
      const { cellId, facingDir } = action.payload
      const isOccupied: Cell | undefined = state.occupiedCells.find(
        cell => cell.id === cellId
      )

      if (!isOccupied) {
        state.selectedCell.id = cellId
        state.selectedCell.isFree = false
        state.selectedCell.itemInCell = 'robot'
        state.selectedCell.facing = facingDir
        state.occupiedCells.push(state.selectedCell)
      } else {
        console.log('This cell is occupied')
      }
    }
  }
})

export const { addRobot } = cellSlice.actions

export default cellSlice.reducer
