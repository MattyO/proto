// App.jsx
import React from "react";
import Item from "./components/item";

export default class App extends React.Component {
    render () {
        return ( <div>
            <h2> Page </h2>
            <Item type="page"/>
        </div> )
    }
}
