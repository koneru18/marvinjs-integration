import React, { Component } from "react";
import styled from "styled-components";

const Iframe = styled.iframe`
  overflow: hidden;
  min-width: 700px;
  min-height: 450px;
  border: 1px solid darkgray;
`;

class EditorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // console.log(`MarvinJSUtil: ${MarvinJSUtil}`);
    // MarvinJSUtil.getEditor("#sketchImg")
    //   .then(sketcherInstance => {
    //     const marvinSketcherInstance = sketcherInstance;
    //   })
    //   .catch(error => {
    //     console.error(`Fail during MarvinJs initilisation: ${error}`);
    //   });
  }

  render() {
    return (
      // <Iframe
      //   id="sketchImg"
      //   title="myFrame"
      //   src="../node_modules/marvinjs/editorpack.html"
      // />
      <Iframe id="sketchImg" title="myFrame" src="marvinjs/editorpack.html" />
    );
  }
}

export default EditorComponent;
