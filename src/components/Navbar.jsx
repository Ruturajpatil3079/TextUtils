import React from 'react';

export default function Navbar(props){
  
  const handleForm = (e)=>{
      e.preventDefault()
  }

  

  const submitClick = ()=>{
    console.log("Search Clicked")
  }
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid ">
    <a className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} href="#">{props.heading}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className={`nav-link  active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-${props.mode==='light'?'dark':'light'}`} href="#">Links</a>
        </li>
    
        <li className="nav-item">
          <a className={`nav-link text-${props.mode==='light'?'dark':'light'}`} aria-disabled="true">{props.about}</a>
        </li>
      </ul>

      <div className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <label htmlFor="favcolor">Choose color:</label>
        <input type="color" onChange={props.handleColorchange} id="favcolor" name="favcolor" />
      </div>
      
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label mx-2 " htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
      <form className="d-flex" onSubmit={(e)=>handleForm(e)} role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-info" onClick={submitClick} type="submit">Search</button>
      </form>
      
    </div>
  </div>
</nav>
    )
}