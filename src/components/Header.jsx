import React from 'react'
import "../App.css"; // if it's one level above the current folder


const Header = () => {
  return (
    <>
    <header>
    <div className = "logo">
  <img src="/images/logo.png" alt="Logo" />
 </div>
<div className="menu">
<ol className="items li">
<li >MENU</li>
<li>LOCATION</li>
<li>ABOUT</li>
<li >CONTACT US</li>
</ol>

</div>
<div className='button'>
<button>LOGIN</button>

</div>
</header>
    
</>
  )
}

export default Header