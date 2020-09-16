import React from "react";

export default class TextItem extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            value: ""
        };
        this.selectType = this.selectType.bind(this)
    }

    selectType (event){
        console.log(this.props.parentref)
        this.setState({value: event.target.value })
        this.props.parentref.updateItem(this.props.index, {"type": event.target.value})
    }

    render () {
        return <div className="item">
            <p> text </p>
        </div>
    }
}
