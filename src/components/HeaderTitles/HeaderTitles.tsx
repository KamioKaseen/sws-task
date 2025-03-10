import './HeaderTitles.style.scss';
import { ShowIcon } from '@icons';

export function HeaderTitles() {
  
  return (
    <div className="header-titles">
      <div className="header-titles__sidebar-group">
        <div className="header-titles__title-column">
          <h4 className="header-titles__project-name">Название проекта</h4>
          <p className="header-titles__abreviatura">Аббревиатура</p>
        </div>

        <button>
          <ShowIcon className="header-titles__show-icon"/>
        </button>
      </div>

      <p className="header-titles__table-title">Строительно-монтажные работы</p>
    </div>
  )
}
