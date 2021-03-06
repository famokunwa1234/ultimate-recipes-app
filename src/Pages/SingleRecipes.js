import React, { Component } from "react";
import {recipeData} from "../data/tempDetails";
import {Link} from "react-router-dom";


class SingleRecipes extends Component {
    constructor(props){
        super(props);
       const id= this.props.match.params.id;
        this.state = {
            recipe:recipeData,
            id,
            loading: false
        }
    }

    render() {
        const {image_url, publisher, publisher_url, title,  ingredients, source_url } = this.state.recipe;
        if(this.state.loading) {
            return (
            <div className="container">
                <div className="row">
                <div className="col=10 mx-auto col-md-6 my-3">
                <h2 className="text-uppercase text-orange text-center">loading recipes ....</h2>
                </div>
                </div>
            </div>
                )
        }
        return (
            <div className="container my-5">
                <div className="row">
                <div className="col=10 mx-auto col-md-6 my-3">
                    <Link to="/recipe" className="btn btn-warning mb-5 text-capitalize">
                        back to recipe link </Link>
                        <img src={image_url} className="d-block w-100"
                        style={{maxHeight: "30rem" }} />
                    </div>
                    {/* info */}
                    <div className="col=10 mx-auto col-md-6 my-3">
                        <h6 className="text-uppercase">{title}</h6>
                        <h6 className="text-warning text-capitalize text-slanted">
                            provide by {publisher}
                        </h6>
                        <a href={publisher_url} target="_blank" rel="noopener noreferrer"
                            className="btn btn-primary mt-2 text-capitalize">publisher webpage
                        </a>
                        <a href={source_url} target="_blank" rel="noopener noreferrer"
                            className="btn btn-success mt-2  mx-2 text-capitalize">recipe url
                        </a>
                        <ul className="list-group mt-4">
                          <h2 className="mt-3 mb-4 text-uppercase"> ingredients</h2>
                         { ingredients.map((item,index) =>{
                           return(<li key={index} className="list-group-item
                           text-slanted">{item}</li>)
                         })} 
                        </ul>
                    </div>
                    </div>
                </div>
        )
    }
}

export default SingleRecipes;