import React from 'react'

const SideMenu = (props) => {
  return (
    <>
    <div onClick={props.menuClose} className={props.menuClass.backDrop}></div>
    <aside className={props.menuClass.sideMenu}>
        <button onClick={props.menuClose} id="closebutton" className="close">
            &times;
        </button>
        <a href="">Existing Inventory</a>
        <a href="">Used Inventory</a>
        <a href=""> Trade-In</a>
        <a href="">Test Drive</a>
        <a href="">Insurance</a>
        <a href="">Cybertruck</a>
        <a href="">Roadster</a>
        <a href="">Semi</a>
        <a href="">Charging</a>
        <a href="">Powerwall</a>
        <a href="">Commercial Energy</a>
        <a href="">Utilities</a>
        <a href="">Find Us</a>
        <a href="">Support</a>
        <a href=""></a>
        <a href="">Investor Relations</a>
    </aside>
    </>
  )
}

export default SideMenu