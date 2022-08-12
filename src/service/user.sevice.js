import httpClient from '../http-api';

const getAll = () => {
    return httpClient.get('/user');
}

const create = (data) => {
    return httpClient.post('/user/post', data)
}

const getUser = id => {
    return httpClient.get(`/user/${id}`);
}

const updated = (id, data) => {
    return httpClient.put(`/user/updated/${id}`, data)
}

export default { getAll, create, getUser, updated };