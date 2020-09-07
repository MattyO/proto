import React from "react";
import NewItem from "./types/new";

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    addItem() {
        this.state.items.push({type: 'new'})
        this.setState(this.state)
    }

    updateItem(index, data) {
        console.log(index)
        console.log(data)
        this.state.items[index] = data
        this.setState(this.state)
    }

    findItemType(passed_item, index) {
        return <NewItem  type={passed_item.type} index={index} parentref={this} />
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
