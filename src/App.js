import './App.css';
import Header from './Header';
import Product from './Product';
import SideMenu from './SideMenu';
import {useState} from 'react'

function App() {

  const menuClass = {
    backDrop: 'backdrop',
    sideMenu: ''
  }

  const [menuState, setMenuState] = useState(menuClass);

  const menuClick = (e)=>{
    e.preventDefault();
    setMenuState({
      backDrop: 'backdrop active',
      sideMenu: 'active'
    })
  }

  const closeMenu=(e)=>{
    e.preventDefault();
    setMenuState(menuClass);
  }


  return (
    <div className="App">
      <Header click={menuClick}/>
      <SideMenu menuClass={menuState} menuClose={closeMenu} />
      <Product/>
    </div>
  );
}

export default App;
