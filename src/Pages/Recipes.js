import React, { Component } from "react";
import RecipesList from "../Component/RecipesList";
import Search from "../Component/Search";
import { recipeData } from "../data/tempList";


class Recipes extends Component {
    constructor(props) {
        super(props)
    }
    state= {
        recipes:recipeData,
        search: "",
    };
    handleChange = e => {
        this.setState({
            search: e.target.value
        });
    };
    handleSubmit= e => {
        e.preventDefault()
    }
    render() {
        return (
            <React.Fragment>
                <Search  search={this.state.search}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit} />
                <RecipesList recipes={this.state.recipes} />
            </React.Fragment>
        )
    }
}

export default Recipes;