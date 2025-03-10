import './HeaderBar.style.scss';
import { MenuIcon, BackArrowIcon } from '@icons';

export function HeaderBar() {
  return (
    <div className="header-bar">
      <nav className="header-bar__navigation">
        <button className="header-bar__icon-button" aria-label="Меню">
          <MenuIcon />
        </button>
        <button className="header-bar__icon-button" aria-label="Назад">
          <BackArrowIcon />
        </button>
      </nav>

      <div className="header-bar__actionGroup">
        <button className="header-bar__text-button">Просмотр</button>
        <button className="header-bar__text-button">Управление</button>
      </div>
    </div>
    
  )
}
