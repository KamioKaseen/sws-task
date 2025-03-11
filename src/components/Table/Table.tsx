import React, { useState } from 'react';
import './Table.style.scss';

interface TableRowData {
  rowName: string;
  salary: number;
  equipment: number;
  overheads: number;
  estimatedProfit: number;
}

export function Table () {
  const rows: TableRowData[] = [
    {
      rowName: 'Южная строительная площадка',
      salary: 20348,
      equipment: 1750,
      overheads: 108.07,
      estimatedProfit: 1209122.5,
    },
    {
      rowName: 'Фундаментальные работы',
      salary: 20348,
      equipment: 1750,
      overheads: 108.07,
      estimatedProfit: 1209122.5,
    },
    {
      rowName: 'Статья работы №1',
      salary: 20348,
      equipment: 1750,
      overheads: 119,
      estimatedProfit: 850,
    },
    {
      rowName: 'Статья работы №2',
      salary: 20348,
      equipment: 1200,
      overheads: 100,
      estimatedProfit: 650,
    },
  ];

  return (
    <table className='table'>
      <thead className=''>
        <tr className='table__header'>
          <th >Уровень</th>
          <th>Наименование работ</th>
          <th>Основная з/п</th>
          <th>Оборудование</th>
          <th>Накладные расходы</th>
          <th>Сметная прибыль</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((item, index) => {
          const marginLeft = index * 2;

          return (
          <tr style={{paddingLeft: `${marginLeft}rem`}} className='table__row'>
            <td>
              <div className='table__img-container'>
                <span 
                  className={`
                    table__row--img 
                    ${index === 0 && 'table__hide-before'}
                    ${index === rows.length - 1 && 'table__hide-after'}
                  `}
                >
                  <img  height={30} width={30} src="/document.svg" alt="document" />
                </span>

                {/* <img height={24} width={24} src="/trashfill.svg" alt="trashfill" /> */}
              </div>
            </td>
            <td>{item.rowName}</td>
            <td>{item.salary}</td>
            <td>{item.equipment}</td>
            <td>{item.overheads}</td>
            <td>{item.estimatedProfit}</td>
          </tr>)  
        })}
      </tbody>
    </table>
  );
};
