var axios = require('axios');

var data = JSON.stringify({
  "subjects": [
    "Principles of Management & Communication"
  ],
  "k": 2
});

var getSimilarSubject = (data) => {

    var config = {
        method: 'post',
        url: 'http://127.0.0.1:5000/api/v1/similar-subject',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    };

    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
}

getSimilarSubject(data);