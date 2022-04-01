const axios = require('axios');

const data = {
    data: 'O Hi this a test Car River Deer Car Bear and'  // response = 2 1 3 4 1 0 0 0 0 0 
    //data: 'on3 mgj6hd kd5fg fjdk8deg fr3 dddd5 ff3' // response = 0 0 3 0 2 1 0 1 0 0 
    //data: '' // response = 0 0 0 0 0 0 0 0 0 0 
};

axios.post('https://rhubarb-crisp-25261.herokuapp.com/getWordLengthFrequency', data)
    .then((res) => {
        console.log(data);
        console.log();
        const words = res.data.split(" ");
        let arr = [];
        for (let i=0; i<10; i++){
            arr.push({length: i+1, frequency: parseInt(words[i])})
        }
        console.table(arr);
    }).catch((err) => {
        console.error(err);
    });



