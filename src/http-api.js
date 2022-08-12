import axios from "axios";

var headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
headers.append('Authorization', 'Bearer ');
headers.append('Accept', 'application/json');
export default axios.create({
    baseURL: "http://localhost:8080/api",
    headers: headers,
});