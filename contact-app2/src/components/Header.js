import React from "react";


const Header = (props)=>{
    console.log(props.title);
    const title = props.title;
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{title}</a>
          </div>
        </nav>
    );
} 

export default Header;