import axios from 'axios'
import { API_URL } from './config'

export const getData = async function() {
    try {
        const response = await axios.get(API_URL)
        return response.data
    } catch (error) {
        throw new Error(error.message)
    }
}