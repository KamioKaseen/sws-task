import './Sidebar.style.scss';
import ITEM_NAMES from '../../mocks/sidebarItems.json'
import { SidebarItem } from '../SidebarItem';
import { v4 as uuid } from 'uuid';

export function Sidebar() {

  return (
    <aside className="sidebar">
      <ul className="sidebar__list">
        {ITEM_NAMES.map((itemName) => {
          return <SidebarItem key={uuid()} name={itemName}></SidebarItem>
        })}
      </ul>
    </aside>
  )
}
