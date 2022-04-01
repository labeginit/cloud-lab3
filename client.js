const axios = require('axios');

const data = {
    data: 'O Hi this a test Car River Deer Car Bear and'  // response = 2 1 3 4 1 0 0 0 0 0 
    //data: 'on3 mgj6hd kd5fg fjdk8deg fr3 dddd5 ff3' // response = 0 0 3 0 2 1 0 1 0 0 
    //data: '' // response = 0 0 0 0 0 0 0 0 0 0 
};

axios.post('http://127.0.0.1:3000/getWordLengthFrequency', data)
    .then((res) => {
        console.log(data);
        console.log(res.data);
    }).catch((err) => {
        console.error(err);
    });



