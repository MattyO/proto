import React from "react";

export default class NewItem extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            value: ""
        };
    }
    selectType (){
        self.ref.updateItem(this.props.index, {"type": this.state.value})
    }

    render () {
        return <div>
            <select value={this.state.value} onChange={this.selectType}> 
                <option value="layout-12">Layout - 12 column</option>
                <option value="text">Text</option>
                <option value="form">Form</option>
                <option value="link">Link</option>
                <option value="image">Image</option>
                <option value="video">Video</option>
            </select>
            </div>
    }
}
