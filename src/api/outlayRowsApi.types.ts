export interface EntityResponse {
    id: number;
    rowName: string;
  }
  
  export interface RowResponse {
    child: RowResponse[];
    id: number;
    parentId: number | null;
    rowName: string;
    equipmentCosts: number;
    estimatedProfit: number;
    machineOperatorSalary: number;
    mainCosts: number;
    materials: number;
    mimExploitation: number;
    overheads: number;
    salary: number;
    supportCosts: number;
    total: number;
  }
  
  export interface OutlayRowRequest {
    equipmentCosts: number;
    estimatedProfit: number;
    machineOperatorSalary: number;
    mainCosts: number;
    materials: number;
    mimExploitation: number;
    overheads: number;
    parentId: number | null;
    rowName: string;
    salary: number;
    supportCosts: number;
  }
  
  export interface OutlayRowUpdateRequest {
    equipmentCosts: number;
    estimatedProfit: number;
    machineOperatorSalary: number;
    mainCosts: number;
    materials: number;
    mimExploitation: number;
    overheads: number;
    rowName: string;
    salary: number;
    supportCosts: number;
  }
  
  export interface DeleteRowRequest {
    eID: number;
    rID: number;
  }