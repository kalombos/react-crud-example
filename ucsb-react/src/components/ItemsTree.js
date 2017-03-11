import React, { Component } from 'react';
import TreeView from 'react-treeview';
import { Link } from 'react-router';


class ItemsTree extends Component {
    render() {
        const {nodes} = this.props;
        return (
            <div>
                {nodes.map((node, i) => {
                    const name = node.name;
                    const label = <Link to={node.id +"/edit"}><span className="node">{name}</span></Link>;
                    let nodeView;
                    if (node.children.length === 0){
                        nodeView =  <Link key={node.id} to={node.id +"/edit"}><div className="info">{name}</div></Link>;
                    }
                    else{
                        nodeView = (
                            <TreeView key={node.id} nodeLabel={label} defaultCollapsed={false}>
                                <ItemsTree nodes={node.children}/>
                            </TreeView>
                        )
                    }
                    return nodeView;
                })}
            </div>
        );
    }
}
export default ItemsTree;