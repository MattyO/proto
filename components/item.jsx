import React from "react";

export default class Item extends React.Component {
    render () {
        return (<div className="item">
            <h2> {this.props.type} </h2>
            <div className="contents">
                <div className="items">
                    {this.state.items.map((item, index) => (
                        this.findItemType(item, index)
                    ))}
                </div>
            </div>
            <button onClick={() => this.addItem()}>ADD</button>
        </div>)
    }
}
