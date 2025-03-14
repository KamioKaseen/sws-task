import { useEffect, useState } from "react";
import "./Table.style.scss";
import { v4 as uuidv4 } from "uuid";  
import { useFetchRowsQuery, eID } from "@/api/outlayRowsApi.ts";
import { RowResponse } from "@/api/outlayRowsApi.types";
import { emptyRow } from "./Table.service";
import { TableRow } from "../TableRow";

export function Table() {
  const { data, isLoading, isSuccess } = useFetchRowsQuery(eID);  
  const [rows, setRows] = useState<RowResponse[]>([]);
  const [emptyRowTempId] = useState<string>();

  const isDataEmpty = data?.length === 0;

  useEffect(() => {
    if (isSuccess) {
      setRows(isDataEmpty ? [emptyRow as RowResponse] : data);
    }
  }, [data, isSuccess, isDataEmpty]);

  return (
    <table className="table">
      <thead>
        <tr className="table__header">
          <th>Уровень</th>
          <th>Наименование работ</th>
          <th>Основная з/п</th>
          <th>Оборудование</th>
          <th>Накладные расходы</th>
          <th>Сметная прибыль</th>
        </tr>
      </thead>
      <tbody className="table__content">
        {isLoading 
          ? Array.from({ length: 10 }).map(() => (
              <tr key={uuidv4()} className="table__skeleton"></tr>  
            ))
          : rows.map((row, index) => (
              <TableRow
                key={row.id || `root-row-${index}-${emptyRowTempId}`}
                row={row}
                parentId={row.id}
                tempId={!row.id ? `root-row-${index}-${emptyRowTempId}` : undefined}
              />    
            ))
        } 
      </tbody>
    </table>
  );
}
