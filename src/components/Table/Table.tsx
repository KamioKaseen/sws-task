import { useEffect, useState } from "react";
import { TableRow } from '../TableRow';
import { TableRowData } from './Table.types';
import './Table.style.scss';
import { useFetchRowsQuery } from "../../api/outlayRowsApi";

export function Table() {
  const eID = 150231; 

  const { data, isLoading, isSuccess } = useFetchRowsQuery(eID);  
  const [rows, setRows] = useState<TableRowData[]>([]);

  const isDataEmpty = data?.length === 0;

  useEffect(() => {
    if (isSuccess) {
      setRows(
        !isDataEmpty
          ? data
          : [{
              rowName: '',
              salary: '',
              equipment: '',
              overheads: '',
              estimatedProfit: '',
            }]
      );
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

        { isLoading 
            ? Array.from({ length: 10 }).map(() => {
                return <tr key={Math.random()} className="table__skeleton"></tr>  
              })
            : rows.map((item, index) => (
              <TableRow
                key={index}
                item={item}
                index={index}
                lastIndex={rows.length - 1}
                paddingLeft={index * 2}
                isDataEmpty={isDataEmpty}
              />
            ))} 
      </tbody>
    </table>
  );
}

