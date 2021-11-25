import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Categories extends Component {
    state = { categories: [] };

    componentDidMount() {
        this.setState({
            categories: [
                {id: 1, name: "Action"},
                {id: 2, name: "Comedy"},
                {id: 3, name: "Drama"},
                {id: 4, name: "Fiction"}
            ]
        })
    }

    render() {
        return (
            <Fragment>
                <h1>Categories</h1>
                <ul>
                    {this.state.categories.map(
                        category => (
                            <li key={category.id}>
                                <Link to={`/by-category/${category.name}`}> {category.name} </Link>
                            </li>
                        )
                    )}
                </ul>
            </Fragment>
        );
    }
}