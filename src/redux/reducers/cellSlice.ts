import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface Cell {
  coords?: string
  isFree: boolean
  itemInCell: 'robot' | 'wall' | null
  facing?: 'NORTH' | 'SOUTH' | 'WEST' | 'EAST'
}

interface CellState {
  occupiedCells: Cell[]
  selectedCell: Cell
  occupiedCellDialogOpen: boolean
  robotToMove: AddRobotPayload | null
}

interface AddRobotPayload {
  coords: string
  facingDir: 'NORTH' | 'SOUTH' | 'WEST' | 'EAST' | undefined
}

const initialState: CellState = {
  occupiedCells: [],
  selectedCell: {
    coords: '',
    isFree: true,
    itemInCell: null
  },
  occupiedCellDialogOpen: false,
  robotToMove: null
}

export const cellSlice = createSlice({
  name: 'cell',
  initialState,
  reducers: {
    addRobot: (state, action: PayloadAction<AddRobotPayload>) => {
      const { coords, facingDir } = action.payload
      const isOccupied: Cell | undefined = state.occupiedCells.find(
        cell => cell.coords === coords
      )

      if (!isOccupied) {
        state.robotToMove = null
        state.selectedCell.coords = coords
        state.selectedCell.isFree = false
        state.selectedCell.itemInCell = 'robot'
        state.selectedCell.facing = facingDir
        state.occupiedCells = [...state.occupiedCells, state.selectedCell]
      } else {
        state.occupiedCellDialogOpen = true
        state.robotToMove = action.payload
        state.occupiedCells = state.occupiedCells.filter(
          cell => cell.coords !== state.robotToMove?.coords
        )
      }
    },

    moveRobot: (state, action: PayloadAction<AddRobotPayload>) => {
      console.log(state.robotToMove?.facingDir)
      const { coords, facingDir } = action.payload
      const isOccupied: Cell | undefined = state.occupiedCells.find(
        cell => cell.coords === coords
      )

      if (!isOccupied) {
        state.selectedCell.coords = coords
        state.selectedCell.isFree = false
        state.selectedCell.itemInCell = 'robot'
        state.selectedCell.facing = facingDir
        state.occupiedCells = [...state.occupiedCells, state.selectedCell]
        const newRobot: Cell = {
          coords: state.robotToMove?.coords,
          isFree: false,
          itemInCell: 'robot',
          facing: state.robotToMove?.facingDir
        }
        state.occupiedCells = [...state.occupiedCells, newRobot]
        state.robotToMove = null
      } else {
        state.occupiedCellDialogOpen = true
        state.robotToMove = action.payload
        state.occupiedCells = state.occupiedCells.filter(
          cell => cell.coords !== state.robotToMove?.coords
        )
      }
    },

    setOccupiedCellDialog: state => {
      state.occupiedCellDialogOpen = !state.occupiedCellDialogOpen
    }
  }
})

export const { addRobot, setOccupiedCellDialog, moveRobot } = cellSlice.actions

export default cellSlice.reducer
