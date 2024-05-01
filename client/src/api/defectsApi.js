import axios from "axios";

export async function getDefects() {
  const data = await axios.get("http://localhost:8080/api/v1/defects");
  console.log(data);
  return data;
}
