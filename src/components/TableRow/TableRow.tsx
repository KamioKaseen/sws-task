import { useEffect, useState } from "react";
import "./TableRow.style.scss";
import { RowResponse } from "@/api/outlayRowsApi.types";
import { useCreateRowMutation, useDeleteRowMutation, useUpdateRowMutation, eID } from "@/api/outlayRowsApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setIsInputActive } from "@/store/rowSlice";
import { createNewChildRow, formatNumber, handleInputChange, prepareRowBody } from "./TableRow.service";
import { v4 as uuidv4 } from "uuid";

interface TableRowProps {
  row: RowResponse;
  paddingLeft?: number;
  parentId?: number;
  tempId?: string;
}

export function TableRow({
  row,
  paddingLeft = 0,
  parentId,
  tempId,
}: TableRowProps) {
  const rID = row.id;
  const rowKey = rID || tempId;
  
  const [childrenRows, setChildrenRows] = useState<RowResponse[]>(row.child);
  const [editedRow, setEditedRow] = useState<RowResponse>(row);  
  const [isEditing, setIsEditing] = useState<boolean>(row.rowName === '' ? true : false);
  const [isHoverActive, setIsHoverActive] = useState<boolean>();
  const [childTempIds, setChildTempIds] = useState<Record<number, string>>({});

  const [createRow] = useCreateRowMutation();
  const [deleteRow,{ isLoading }] = useDeleteRowMutation();
  const [updateRow] = useUpdateRowMutation();

  const isInputActive = useSelector((state: RootState) => state.input.isInputActive);  
  const dispatch = useDispatch(); 

  useEffect(() => {
    setChildrenRows(row.child);
  }, [row.child]);

  const handleAddRow = () => {
    if(!isInputActive) {
      const newRow = createNewChildRow() as RowResponse;
      const newTempId = uuidv4();
      setChildTempIds(prev => ({...prev, [childrenRows.length]: newTempId}));
      setChildrenRows((prev) => [...prev, newRow]);
    }
  };
  
  useEffect(() => {
    if(isEditing) {
      dispatch(setIsInputActive(true)); 
      setIsHoverActive(false);

    } else {
      dispatch(setIsInputActive(false)); 
      setIsHoverActive(true);
    }
  }, [isEditing, dispatch])

  const handleInputChangeWrapper = (key: keyof RowResponse, value: string) => {  
    setEditedRow(prevState => handleInputChange(key, value, prevState));  
  };  

  const handleDeleteRow = () => {
    if (row.id) {
      deleteRow({ eID, rID }).unwrap()
    }
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {  
    if (event.key === 'Enter') {  
      setIsEditing(false)

      const body = prepareRowBody(editedRow, parentId!);

      if (row.id) {
          updateRow({ eID, rID, body }).unwrap();
      } 
      else {
          createRow({ eID, body }).unwrap();
      }
    } 
  };   

  const renderCell = (key: keyof RowResponse) => {
    const input = (
      <input
        className="table-row__input"
        type="text"
        value={typeof editedRow[key] === 'object' ? '' : editedRow[key]}
        placeholder="Введите данные"
        onChange={(e) => handleInputChangeWrapper(key, e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    );

    return isEditing
      ? input
      : (typeof editedRow[key] === 'number' || typeof editedRow[key] === 'string')
        ? formatNumber(editedRow[key])
        : '';
  };
   

  return (
    <>
      <tr
        onDoubleClick={handleDoubleClick}
        className="table-row" 
        style={{ paddingLeft: `${paddingLeft}rem` }}>
        <td>
          <div className={`table-row__img-container ${isHoverActive && 'table-row--hover'}`}>
            <span className={`table-row--img ${rowKey === parentId && 'no-before no-after'}`}>
              <img
                onClick={handleAddRow}
                height={30}
                width={30}
                src="/document.svg"
                alt="document"
              />
            </span>
            
            {isLoading 
              ?
              <div className="loader"></div> 
              :
              <img
              onClick={handleDeleteRow}
              className="table-row__trashfill"
              height={24}
              width={24}
              src="/trashfill.svg"
              alt="trashfill"/>}
          </div>
        </td>
        
        <td>{renderCell("rowName")}</td>
        <td>{renderCell("salary")}</td>
        <td>{renderCell("materials")}</td>
        <td>{renderCell("overheads")}</td>
        <td>{renderCell("estimatedProfit")}</td>
      </tr>

      {childrenRows.length > 0 &&
        childrenRows.map((childRow: RowResponse, index: number) => (
          <TableRow
            key={childRow.id || childTempIds[index] || `child-${index}-${rowKey}`}
            row={childRow}
            parentId={row.id}
            paddingLeft={paddingLeft + 2}
            tempId={childTempIds[index] || `child-${index}-${rowKey}`}
          />
        ))}
    </>
  );
}