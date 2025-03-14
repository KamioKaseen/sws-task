import { RowResponse } from "@/api/outlayRowsApi.types";

// Создаание пустой строки в массиве
export const createNewChildRow = (): Partial<RowResponse> => ({
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
});

// Обработка изменения значения в строке
export const handleInputChange = (
  key: keyof RowResponse,
  value: string,
  editedRow: RowResponse
): RowResponse => ({
  ...editedRow,
  [key]: value
});

// Тело запроса
export const prepareRowBody = (editedRow: RowResponse, parentId: number) => ({
  ...editedRow,
  parentId: parentId as number | null,
});


export function formatNumber(value: string | number): string {
  const num = Number(String(value).replace(',', '.'));
  if (isNaN(num)) {
    return String(value);
  }

  return new Intl.NumberFormat('ru-RU', {
    maximumFractionDigits: 20,
  }).format(num);
}