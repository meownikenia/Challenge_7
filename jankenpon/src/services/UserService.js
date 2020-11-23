import http from "./httpcommon"
class UserService {
    getAllUsers() {
        return http.get('/players')
    }

    searchUsers(key) {
        return http.get(`/searchplayers?keyword=${key}`)
    }

    getOneUser(id){
        return http.get(`/player/${id}`)
    }
    createUser(data) {
        return http.post(`/register`, data)
    }

    updateUser(id, data) {
        return http.put(`/player/${id}`, data)
    }

}
export default new UserService()
// export async function getAllUsers() {

//     const response = await fetch('/api/users');
//     return await response.json();
// }

// export async function createUser(data) {
//     const response = await fetch(`/api/user`, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({user: data})
//       })
//     return await response.json();
// }