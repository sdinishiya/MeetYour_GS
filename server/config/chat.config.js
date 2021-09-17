const axios = require('axios');

const API_PRIVATE_KEY = "4fc3e7d1-dcde-45a9-8f3f-1d355a999d3a";

const addUserToChatEngine = async (data) => {
    axios({
        method: 'post',
        url: 'https://api.chatengine.io/users/',
        headers: {
            'PRIVATE-KEY': API_PRIVATE_KEY
        },
        data : data
    }).then((res) => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}

module.exports = {addUserToChatEngine}
