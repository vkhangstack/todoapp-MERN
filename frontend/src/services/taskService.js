import axios from "axios";

const urlApi = "http://localhost:3000/api/v1/tasks";

export function getTasks() {
  return axios.get(urlApi);
}
export function addTask(task) {
  return axios.post(urlApi, task);
}
export function updateTask(id, task) {
  return axios.put(urlApi + "/" + id, task);
}
export function deleteTask(id) {
  return axios.delete(urlApi + "/" + id);
}
