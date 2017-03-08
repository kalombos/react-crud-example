import React, { Component } from 'react';
import TreeView from 'react-treeview';


class ItemsTree extends Component {
    render() {
        const {nodes} = this.props;
        return (
            <div>
                {nodes.map((node, i) => {
                    const name = node.name;
                    const label = <span className="node">{name}</span>;
                    let nodeView;
                    if (node.children.length === 0){
                        nodeView = <div className="info">{name}</div>;
                    }
                    else{
                        nodeView = (
                            <TreeView key={node.id} nodeLabel={label} defaultCollapsed={true}>
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