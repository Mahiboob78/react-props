import React from 'react'
import Classprops from './Classprops';
import Functionprops from './Functionalprops';

class App extends React.Component {
  render() {
    return(
      <div> 
      <Classprops name="Learner1" place="PlaceX"><p>Child Component</p></Classprops>
      <Classprops name="Learner2" place="PlaceY"><button>Click</button></Classprops>
      <Classprops name="Learner3" place="PlaceZ"/>
      <Functionprops name="Learner4" place="PlaceA"/>
    </div>
    )
  }
}
export default App;

