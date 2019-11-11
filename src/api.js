import axios from 'axios';

const request = axios.create({ baseURL: 'https://api.noopschallenge.com/hexbot'})

export const getColor = () => {
    console.log('accessing hexbot')
    return (
        request
            .get('/')
            .then(({data}) => {
                console.log('received from hexbot:' + JSON.stringify(data))
                return data.colors[0].value
            })
            .catch(err => console.log(err))
    )
}