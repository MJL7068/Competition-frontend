import axios from 'axios'
const baseUrl = 'http://localhost:3001'

const getWinners = () => {
    const request = axios.get(baseUrl + '/winners')
    return request.then(response => response.data)
}

const getNumber = () => {
    const request = axios.get(baseUrl + '/count')
    return request.then(response => response.data)
}

const increment = () => {
    const request = axios.post(baseUrl + '/count')
    return request.then(response => response.data)
}

export default {getWinners, getNumber, increment}