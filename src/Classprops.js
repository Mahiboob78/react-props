import React, { Component } from 'react'

class Classprops extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name} from {this.props.place} this is Mahiboob Ali</h1>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default Classprops
