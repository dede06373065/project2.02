import React, { Component } from 'react'
import Nav from './nav'
import Content from './content'

export default class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Content />
            </div>
        )
    }
}