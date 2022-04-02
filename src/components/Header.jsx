import "../index.css";
// import Images from "../assets/images/index";
// import {fa} from 'react-icons/fa'

export default function Header() {
  return (
    <body>
      <nav className="navbar">
        {/* <!-- LOGO --> */}
        {/* <div className="logo">MUO</div> */}
        <div className="logo">
          {/* <img src={Images.Logo1} alt="Logo"  />
          <img src={Images.Logo2} alt="Logo"  /> */}
        </div>
        {/* <!-- NAVIGATION MENU --> */}
        <ul className="nav-links">
          {/* <!-- USING CHECKBOX HACK --> */}
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" class="hamburger">
            &#9776;
          </label>
          {/* <!-- NAVIGATION MENUS --> */}
          
        </ul>
      </nav>
    </body>
  );
}
