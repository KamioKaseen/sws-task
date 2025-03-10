import './App.scss';
import { HeaderBar, HeaderTitles, Sidebar } from '@components';

export default function App() {
  return (
    <div className="app">
      <header>
        <HeaderBar />
        <HeaderTitles />
      </header>

      <Sidebar />
      
    </div>
  )
}
