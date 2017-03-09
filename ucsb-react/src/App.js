import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-treeview/react-treeview.css'

class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-md-6">
                  {this.props.children}
              </div>
          </div>
      </div>
    );
  }
}

export default App;
