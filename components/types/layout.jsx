import React from "react";

export default class LayoutItem extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            value: ""
        };
        this.addItem= this.addItem.bind(this)
    }

    addItem(event){
        this.props.page.addItem(this.props.index)
    }

    render () {
        return <div className="item">
            <div className="contents">
                <h3>Layout 12</h3>
                <div className="items">
                    {this.props.item.items.map((item, index) => (
                        this.props.page.findItemType(item, this.props.index.concat(index))
                    ))}
                    <button onClick={() => this.addItem()}>ADD</button>
                </div>
            </div>
        </div>
    }
}
