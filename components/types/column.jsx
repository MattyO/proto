import React from "react";

export default class ColumnItem extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            value: "",
            size: 1
        };
        this.selectType = this.selectType.bind(this)
    }

    render () {
        return <div className="item">
            <p> column </p>
        </div>
    }
}
