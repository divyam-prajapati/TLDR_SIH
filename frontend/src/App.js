import React, { Component } from "react"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressRelease: []
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/press-releases/');
      const pressRelease = await res.json();
      this.setState({
        pressRelease
      });
      console.log(pressRelease)
    } catch (e) {
      console.log(e);
    }
  }

  renderItems = () => {
    return this.state.pressRelease.map(item => (
      <div key={item.PressReleaseId}>
        <h1>{item.PressReleaseTitle}</h1>
        <ul className="list-group list-group-flush"> 
          <li>{item.PressReleaseDate}</li>
          <li>{item.PressReleaseCategory}</li>
          <li>{item.PressReleaseLink}</li>
          <li>{item.PressReleaseSummary}</li>
        </ul>
      </div>
    ));
  };

  render() {
    return (
      <main className="content">
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <hr/>
            <ul className="list-group list-group-flush">
              {this.renderItems()}
            </ul>
            <hr/>
          </div>
        </div>
      </div>
    </main>
    )
  }
}

export default App;