import './App.scss';
import { 
  HeaderBar, 
  HeaderTitles, 
  Sidebar, 
  Table
 } from '@components';

export default function App() {
  return (
    <div className="app">
      <header>
        <HeaderBar />
        <HeaderTitles />
      </header>

      <main className='app__main'>
        <Sidebar />
        <Table />
      </main> 
    </div>
  )
}
