import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-d9e7c.cloudfunctions.net/api",
  // baseURL: "http://localhost:5001/challenge-d9e7c/us-central1/api", //API (Cloud Function) URL
});

export default instance;
