import axios from 'axios'
const baseUrl = '/api'

const getWinners = () => {
    const request = axios.get(baseUrl + '/winners')
    return request.then(response => response.data)
}

const getNumber = () => {
    const request = axios.get(baseUrl + '/count')
    return request.then(response => response.data)
}

const increment = (name) => {
    const reqObject = {
        name: name
    }
    const request = axios.post(baseUrl + '/count', reqObject)
    return request.then(response => response.data)
}

export default {getWinners, getNumber, increment}