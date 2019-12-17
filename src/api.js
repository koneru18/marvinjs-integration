import axios from "axios";

export function fetchSearchResults(molecule) {
  return axios.post(
    "http://localhost:8081/jwsdb/rest-v1/db/additional/testExtendedTable/substructure",
    {
      hitCount: 10,
      molecule,
      withFingerprintDistance: true
    }
  );
}

export function saveMolecule(payload) {
  const response = axios.post(
    "http://localhost:8081/jwsdb/rest-v1/db/additional/testExtendedTable/batchInsert",
    payload
  );
  return response;
}

export function getSmiles(structure) {
  const params = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const payload = {
    inputParams: "mrv",
    outputParams: "smiles",
    structure
  };
  return axios.post(
    "http://localhost:8081/jwsio/rest-v1/molconvert",
    payload,
    params
  );
}
