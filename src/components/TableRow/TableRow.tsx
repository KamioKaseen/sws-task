import { useEffect, useState } from "react";
import { TableRowData } from "../Table/Table.types";
import "./TableRow.style.scss";

interface TableRowProps {
  item: TableRowData;
  index: number;
  lastIndex: number;
  paddingLeft: number;
  isDataEmpty: boolean;
}

export function TableRow({
  item,
  index,
  lastIndex,
  paddingLeft,
  isDataEmpty
}: TableRowProps) {
  const eID = 150231; 

  const [editedRow, setEditedRow] = useState<TableRowData>(item);  
  const [error, setError] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  
 
  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    setIsEditing(true);
  }, [isDataEmpty])

  const handleInputChange = (key: keyof TableRowData, value: string) => {  
    // Сбрасываем ошибку, при входе в инпут
    setError(false);

    setEditedRow(prevState => ({  
        ...prevState,  
        [key]: value  
    }));  
  };  

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {  
    if (event.key === 'Enter') {  
        // Проверяем заполнены ли все поля
        const allFilled = Object.values(editedRow).every(value => value.trim() !== '');  

        if (allFilled) {  
          setIsEditing(false);
        } 
        else {  
          event.preventDefault();  
          setError(true)
        }  
    }  
};   
  
  // Отображаем инпут, если в режиме редактировани
  // В обратном случае - данные строеки
  const renderCell = (key: keyof TableRowData) => {  
      return isEditing 
        ?   
        <input  
          className="table-row__input"  
          type="text"  
          value={editedRow[key] || ''} 
          placeholder="Введите данные"  
          onChange={(e) => handleInputChange(key, e.target.value)} 
          onKeyDown={(e) => handleKeyDown(e)}
        />  
        :   
        editedRow[key]    
  };  

  return (
    <>
      <tr
        style={{ paddingLeft: `${paddingLeft}rem` }}
        className="table-row"
        onDoubleClick={handleDoubleClick}
      >
        <td>
          <div
            className={`table-row__img-container ${isHover && 'table-row--hover'}`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <span 
              className={`
                table-row--img
                ${index === 0 && 'table-row__hide-before'}
                ${index === lastIndex && 'table-row__hide-after'}
                
              `} 
              >
              <img height={30} width={30} src="/document.svg" alt="document" />
            </span>

            {isHover && (
              <img
                className="table-row__trashfill"
                height={24}
                width={24}
                src="/trashfill.svg"
                alt="trashfill"
              />
            )}
          </div>
        </td>
        <td>{renderCell("rowName")}</td>
        <td>{renderCell("salary")}</td>
        <td>{renderCell("equipment")}</td>
        <td>{renderCell("overheads")}</td>
        <td>{renderCell("estimatedProfit")}</td>
      </tr>
      {error && <td className="table-row__error">Не все поля заполнены!</td>}
    </>
  );
}

