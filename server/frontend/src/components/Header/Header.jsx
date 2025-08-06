import React from 'react';
import "../assets/style.css";
import "../assets/bootstrap.min.css";

const Header = () => {
    const logout = async (e) => {
    e.preventDefault();
    let logout_url = window.location.origin+"/djangoapp/logout";
    const res = await fetch(logout_url, {
      method: "GET",
    });
  
    const json = await res.json();
    if (json) {
      let username = sessionStorage.getItem('username');
      sessionStorage.removeItem('username');
      window.location.href = window.location.origin;
      window.location.reload();
      alert("Logging out "+username+"...")
    }
    else {
      alert("The user could not be logged out.")
    }
  };
    
//Gets the username in the current session
let curr_user = sessionStorage.getItem('username')

//The default home page items are the login and register links
let home_page_items = <div className="input_panel">
  <a className="nav_item" style={{color: "white", textDecoration: "none", marginRight: "15px", fontWeight: "500"}} href="/login">Login</a>
  <a className="nav_item" style={{color: "white", textDecoration: "none", fontWeight: "500"}} href="/register">Register</a>
</div>

//If the user is logged in, show the username and logout option on home page
if ( curr_user !== null &&  curr_user !== "") {
    home_page_items = <div className="input_panel">
      <text className='username' style={{color: "white", marginRight: "15px", fontWeight: "500"}}>{sessionStorage.getItem("username")}</text>
    <a className="nav_item" style={{color: "white", textDecoration: "none", fontWeight: "500"}} href="/djangoapp/logout" onClick={logout}>Logout</a>
  </div>
}
    return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-light" style={{background:"linear-gradient(135deg, #1f70c1 0%, #0f4c75 100%)",height:"1in",boxShadow:"0 2px 8px rgba(31, 112, 193, 0.2)"}}>
            <div class="container-fluid">
              <h2 style={{paddingRight: "5%", color: "white", fontWeight: "700", textShadow: "0 1px 2px rgba(0,0,0,0.1)"}}>Dealerships</h2>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" style={{fontSize: "16px", color: "white", fontWeight: "500", transition: "all 0.2s ease"}} aria-current="page" href="/" onMouseOver={(e) => e.target.style.color = "#e8f2ff"} onMouseOut={(e) => e.target.style.color = "white"}>Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" style={{fontSize: "16px", color: "white", fontWeight: "500", transition: "all 0.2s ease"}} href="/about" onMouseOver={(e) => e.target.style.color = "#e8f2ff"} onMouseOut={(e) => e.target.style.color = "white"}>About Us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" style={{fontSize: "16px", color: "white", fontWeight: "500", transition: "all 0.2s ease"}} href="/contact" onMouseOver={(e) => e.target.style.color = "#e8f2ff"} onMouseOut={(e) => e.target.style.color = "white"}>Contact Us</a>
                  </li>
                </ul>
                <span class="navbar-text">
                  <div class="loginlink" id="loginlogout">
                  {home_page_items}
                  </div>
                  </span>
              </div>
            </div>
          </nav>
        </div>
    )
}

export default Header
