import React, { Component } from "react";
import styled from "styled-components";
import { getSmiles, saveMolecule, fetchSearchResults } from "./api";
import SearchResults from "./SearchResults";

const Iframe = styled.iframe`
  overflow: hidden;
  min-width: 700px;
  min-height: 450px;
  border: 1px solid darkgray;
`;

class EditorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { marvinInstance: {}, smiles: "", searchResults: [] };
    this.getSmiles = this.getSmiles.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.initMarvinJS();
    }, 1000);
  }

  initMarvinJS() {
    window.MarvinJSUtil.getEditor("#sketchImg")
      .then(sketcherInstance => {
        console.log(sketcherInstance);
        this.setState(
          {
            marvinInstance: sketcherInstance
          },
          this.setUpMarvinJS()
        );
      })
      .catch(error => {
        console.error(`Fail during MarvinJs initilisation: ${error}`);
      });
  }

  setUpMarvinJS() {
    const { marvinInstance } = this.state;
  }

  saveMolecule = async () => {
    const molecule = await this.getSmiles();
    const payload = [
      {
        additionalData: {
          name: "Test 9999"
        },
        id: "20",
        molecule
      }
    ];
    await saveMolecule(payload);
  };

  fetchSearchResults = async () => {
    // const molecule = "c1ccccc1";
    const molecule = await this.getSmiles();
    const response = await fetchSearchResults(molecule);
    this.setState({
      searchResults: response.data
    });
  };

  getSmiles = async () => {
    const { marvinInstance } = this.state;
    const mrvFormat = marvinInstance.exportAsMrv();
    const smiles = await getSmiles(mrvFormat);
    this.setState({
      smiles: smiles.data
    });
    console.log(`getSmiles: ${smiles.data}`);
    return smiles.data;
  };

  render() {
    return (
      <div>
        <Iframe id="sketchImg" src="marvinjs/editorws.html" />
        <br />
        <br />
        <button onClick={this.saveMolecule}>Save</button>
        <button onClick={this.fetchSearchResults}>Search</button>
        <br />
        <br />
        <br />
        {/* <button onClick={this.getSmiles}> GetSmiles </button> */}

        {this.state.searchResults.length > 0 && (
          <>
            <div>Search Results for Smiles: {this.state.smiles}</div>
            <br />
            <SearchResults
              data={this.state.searchResults}
              // smiles={this.state.smiles}
            />
          </>
        )}
      </div>
    );
  }
}

export default EditorComponent;
