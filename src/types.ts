export interface CellProps {
  keyCell: string
}

export interface PlacementFormData {
  row: number
  column: number
  facing?: 'North' | 'South' | 'East' | 'West'
}
