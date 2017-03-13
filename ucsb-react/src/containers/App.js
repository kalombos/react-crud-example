import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-treeview/react-treeview.css'
import LoadingBar from 'react-redux-loading-bar'


class App extends Component {
  render() {
    return (
        <div>
            <div className="page-header">
                <h1>Управление иерархическим списком</h1>
            </div>
            <LoadingBar />
            <div className="container">
                <div className="jumbotron">
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
export default App;
