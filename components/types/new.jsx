import React from "react";

export default class NewItem extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            value: ""
        };
        this.selectType = this.selectType.bind(this)
    }

    selectType (event){
        console.log(this.props.index)
        this.setState({value: event.target.value })
        this.props.page.updateItem(this.props.index, {"type": event.target.value, "items": []})
    }

    render () {
        return <div className="item">
            <select value={this.state.value} onChange={this.selectType}> 
                <option value="new">Select Type</option>
                <option value="layout-12">Layout - 12 column</option>
                <option value="text">Text</option>
                <option value="list">List</option>
                <option value="form">Form</option>
                <option value="link">Link</option>
                <option value="image">Image</option>
                <option value="video">Video</option>
            </select>
            </div>
    }
}
