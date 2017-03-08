import React, { Component } from 'react';
import TreeView from 'react-treeview';
import {ItemsList} from './containers'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-treeview/react-treeview.css'
import './App.css';


const dataSource = [
    {
        name: 'Средства и системы защиты информации',
        id: 1,
        parent: null
    },
    {
        name: 'Средство защиты информации',
        id: 2,
        parent: 1
    },
    {
        name: 'Средство со встроенными функциями',
        id: 3,
        parent: 1
    },
    {
        name: 'Программное обеспечение',
        id: 4,
        parent: null
    },
    {
        name: 'Системное программное обеспечение',
        id: 5,
        parent: 4
    },
    {
        name: 'Средство установки и контроля',
        id: 6,
        parent: 5
    },
    {
        name: 'Операционная система',
        id: 7,
        parent: 5
    }
];
function toTree(nodes){

    let map = {}, node, roots = [];
    for (let i = 0; i < nodes.length; i += 1) {
        node = nodes[i];
        node.children = [];
        map[node.id] = i; // use map to look-up the parents
        if (node.parent !== null) {
            nodes[map[node.parent]].children.push(node);
        } else {
            roots.push(node);
        }
    }
    return roots
}
class Tree extends Component {
    render() {
        const {nodes} = this.props;
        console.log(nodes);
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
                        <Tree nodes={node.children}/>
                    </TreeView>
                )
              }
              return nodeView;
            })}
          </div>
        );
    }
}

class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-md-6">
                  <h1>ura</h1>
                <ItemsList/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
