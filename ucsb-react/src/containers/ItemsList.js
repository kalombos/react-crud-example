import React, {Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ItemsTree } from '../components';
import * as actions from '../actions/actions';


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
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        const {actions} = this.props;
        actions.itemsListAsync();
    }
    render() {
        const {itemsList} = this.props;
        console.log(itemsList);
        const nodes = toTree(itemsList);
        return (
            <ItemsTree nodes={nodes}/>
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
