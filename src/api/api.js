import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "90440e03-084f-488e-a3b5-5eca0a570644"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
        return response.data;
            });
}
}


export const followUser = (id, followFunc) => {
    return instance.post(`follow/${id}`, {})
        .then(response => {
            if (response.data.resultCode === 0) {
                followFunc(id);
            }
        })
}

export const unfollowUser = (id, unfollowFunc) => {
    return instance.delete(`follow/${id}`)
    .then(response => {
        if (response.data.resultCode === 0) {
            unfollowFunc(id);
        }
    });
}
