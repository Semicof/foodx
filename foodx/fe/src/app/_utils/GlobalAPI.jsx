const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"    //"https://foodxbe-production.up.railway.app/api"
})

const getUsers = ()=>axiosClient.get("posts")

export {
    getUsers
}