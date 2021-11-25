import React, { Component, Fragment } from 'react';

export default class Category extends Component {
    render() {
        return (
            <Fragment>
                <h1>Category: {this.props.name} </h1>
            </Fragment>
        );
    }
}