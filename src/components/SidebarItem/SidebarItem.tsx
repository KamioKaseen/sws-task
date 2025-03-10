import './SidebarItem.style.scss';

interface SidebarItemProps {  
    name: string; 
  }  

export function SidebarItem({ name }: SidebarItemProps) {
  return (
    <li className='sidebar-item'>
        <img className='sidebar-item__icon' 
          width={22} 
          height={22} 
          src="/squares.svg" 
          alt="squares" />
        {name}
    </li>
  )
}
