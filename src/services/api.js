const people = [
    { name: 'Nader', age: 36 },
    { name: 'Amanda', age: 24 },
    { name: 'Jason', age: 44 }
]
import { API_URL } from '../config/constants'

export default (email, password) => {
    return new Promise((resolve, reject) => {
        console.log('api===', email, password)

    })
}
