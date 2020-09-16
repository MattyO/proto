import React from "react";
import NewItem from "./types/new"
import TextItem from "./types/text"
import LayoutItem from "./types/layout"

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    addItem(index) {
        var found_item

        if(index == undefined){
            this.state.items.push({type: 'new'})
        }else{ 
            found_item = this.state.items[index.shift()]

            while(index.length){
                var temp_item = found_item.items[index.shift()]
                found_item = temp_item
            }
            found_item.items.push({type: 'new'})
        }
        this.setState(this.state)
    }

    updateItem(index, data) {
        this.state.items[index] = data
        this.setState(this.state)
    }

    findItemType(passed_item, index) {
        if(passed_item.type == 'new'){
            return <NewItem type={passed_item.type} index={index} page={this} />
        }else if(passed_item.type == 'text'){
            return <TextItem type={passed_item.type} index={index} page={this} item={passed_item}/>
        }else if(passed_item.type == 'layout-12'){
            return <LayoutItem  type={passed_item.type} index={index} page={this} item={passed_item}/>
        }
    }

    render () {
        return <div className="item">
            <div className="contents">
                <div className="items">
                    {this.state.items.map((item, index) => (
                        this.findItemType(item, [index])
                    ))}
                    <button onClick={() => this.addItem()}>ADD</button>
                </div>
            </div>
        </div>
    }
}
