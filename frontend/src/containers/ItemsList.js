import React, {Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ItemsTree } from '../components';
import * as actions from '../actions/actions';
import { Link } from 'react-router';


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


class ItemsList extends Component {

    componentWillMount() {
        const {actions} = this.props;
        actions.itemsListAsync();
    }
    render() {
        const {itemsList} = this.props;
        const nodes = toTree(itemsList);
        return (
            <div>
                <Link className="btn btn-info btn-mini" to="/new">Add Item</Link>
                <ItemsTree nodes={nodes}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        itemsList: state.items.itemsList
    };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
    mapStateToProps,
  mapDispatchToProps
)(ItemsList);
