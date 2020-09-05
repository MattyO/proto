import React from "react";
import NewItem from "./types/new";

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.ref = React.createRef();
    }

    addItem() {
        console.log("adding item")
        this.state.items.push({type:null})
        this.setState(this.state)
        console.log(this.state)
    }

    updateItem(index, data) {
        this.state.items[index].update(data)
    }

    findItemType(passed_item, index) {
        console.log(passed_item)
        return <NewItem  type={passed_item.type} ref={this.ref} />
    }

    render () {
        return (<div className="item">
            <h2> {this.props.type} </h2>
            <div className="items">
                {this.state.items.map((item, index) => (
                    this.findItemType(item, index)
                ))}
            </div>
            <button onClick={() => this.addItem()}>ADD</button>
        </div>)
    }
}
