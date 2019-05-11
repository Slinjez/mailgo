import React from "react";

import "./App.css";

class App extends React.Component {
  state = { version: "" };

  render() {
    return (
      <div className="App">
        <img src="mailgo.png" alt="mailgo" />
        <h1 className="mailgo-title-docs">mailgo</h1>
        <code className="code">
          WIP,{" "}
          <a className="App-link" href="https://github.com/manzinello/mailgo">
            GitHub
          </a>
          <br />
          <div className="demo">
            a classic mailto
            <br />
            <a
              className="App-link no-mailgo"
              href="mailto:matteo@manzinello.dev"
            >
              matteo@manzinello.dev
            </a>
            <br />
            <br />
            with <strong>mailgo</strong>
            <br />
            <a className="App-link" href="mailto:matteo@manzinello.dev">
              matteo@manzinello.dev
            </a>
          </div>
          docs:{" "}
          <a
            className="App-link"
            href="https://github.com/manzinello/mailgo/blob/master/README.md"
          >
            README
          </a>
          <br />
          <br />
          <img
            alt="size of mailgo.min.js on GitHub"
            src="https://img.shields.io/github/size/manzinello/mailgo/dist/mailgo.min.js.svg?label=mailgo.min.js&style=flat-square"
          />
          <br />
          <br />
          <a
            className="github-button"
            href="https://github.com/manzinello/mailgo"
            data-icon="octicon-star"
            data-show-count="true"
            aria-label="Star manzinello/mailgo on GitHub"
          >
            Star
          </a>
          <br />
          <br />
          <div className="smaller">
            a project by
            <br />
            <a className="App-link" href="https://matteomanzinello.com">
              matteo manzinello
            </a>
          </div>
        </code>
      </div>
    );
  }
}

export default App;
