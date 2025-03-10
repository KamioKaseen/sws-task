import './Sidebar.style.scss';
import ITEM_NAMES from '../../mocks/sidebarItems.json'
import { SidebarItem } from '../SidebarItem';

export function Sidebar() {

  return (
    <aside className="sidebar">
      <ul className="sidebar__list">
        {ITEM_NAMES.map((itemName) => {
          return <SidebarItem name={itemName}></SidebarItem>
        })}
      </ul>
    </aside>
  )
}
