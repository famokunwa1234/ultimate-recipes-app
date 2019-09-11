import React, { Component } from "react";
import Header from "../Component/Header";
import {Link} from "react-router-dom";
class Home extends Component {
    render() {
        return (  
           <div>  
              <Header title="amazing recipes">
            <Link to="recipes" className="text-uppercase
            btn btn-secondary btn-lg mt-3">
                search recipes
            </Link>
            </Header>
           </div>
           
        );
    }
}

export default Home;