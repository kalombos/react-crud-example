import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-treeview/react-treeview.css'
import LoadingBar from 'react-redux-loading-bar'


class App extends Component {
  render() {
    return (
        <div>
            <LoadingBar />
            {this.props.children}
        </div>
    );
  }
}
export default App;
