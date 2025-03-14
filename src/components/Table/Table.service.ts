interface EmptyRow {
  rowName: string,
  salary: number,
  overheads: number,
  estimatedProfit: number,
  equipmentCosts: number,
  machineOperatorSalary: number,
  mainCosts: number,
  materials: number,
  mimExploitation: number,
  supportCosts: number,
  total: number,
  child: EmptyRow[];
  parentId: null,
}

export const emptyRow: EmptyRow = {
  rowName: '',
  salary: 0,
  overheads: 0,
  estimatedProfit: 0,
  equipmentCosts: 0,
  machineOperatorSalary: 0,
  mainCosts: 0,
  materials: 0,
  mimExploitation: 0,
  supportCosts: 0,
  total: 0,
  child: [],
  parentId: null,
};