import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { IoLogoGithub } from 'react-icons/io';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img width="120" height="120" src="https://user-images.githubusercontent.com/20736455/48205670-effe4300-e3af-11e8-8cfd-7078f8965e1f.png"></img>
          <h1>Sakanax</h1>
          <div>
            simple cli tool to detect github pull request files.
          </div>
          <br />
          <div>
            <Button size="large" variant="outlined" href="https://github.com/sakanax/sakanax">
              github<IoLogoGithub />
            </Button>
            <Button size="large" variant="outlined" href="https://rubygems.org/gems/sakanax">
              RUBY GEMS<img width="20" height="20" src="https://camo.githubusercontent.com/beede1ff8999a3d69c452f1cd0df90e076454344/687474703a2f2f7275627967656d732e6f72672f66617669636f6e2e69636f"></img>
            </Button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
