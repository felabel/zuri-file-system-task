
const fs = require('fs')
// importing the fetch module
const fetch = require('node-fetch');

// handling errors using a function

function checkStatus(res){
    if(res.ok){
        return res
    } else {
        throw new Error (`The HTTP status of the reponse: ${res.status} (${res.statusText})`);
    }
}


// API call to get the data 
fetch('http://jsonplaceholder.typicode.com/posts')

// calling the error function
.then(checkStatus)
// waiting to receive the response from the Google web server and converting it to text format:
.then(res => res.json())


// waiting for the result and printing it to the console
.then(json => {
    console.log(json)

    // converting the json data to string format
    let data = JSON.stringify(json)

    // creating a new file called posts.json and parsing the json data as the content
    fs.writeFileSync('result/posts.json', data);
})
// check for error
.catch(err => console.log(err));

