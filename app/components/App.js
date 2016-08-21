import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="hello-world">
        <h2>Welcome to Reatron</h2>
        Electron version: {process.versions.electron}<br/>
        Chrome version: {process.versions.chrome}<br/>
        Your memory: {parseInt(process.getSystemMemoryInfo().total/1000000)} GB
      </div>
    )
  }
}

export default App;
