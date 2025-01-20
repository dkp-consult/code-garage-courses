const fs = require('fs');
const https = require('https');
const readline = require('readline');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function saveFile(content){
    const d = new Date();
    fs.writeFile(`randomuser-${d.getTime()}.json`, content, (err) => {
        if (err) {
            throw err;
        }
        console.log('The user has been saved!');
        askQuestion();
    });
}

function callApi(){
    https.get('https://randomuser.me/api/', (resp) => {
        let data ='';
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            saveFile(data);
        });
    });
}

function askQuestion(){
    input.question('Do you want to generate a new user ? (Y/n) ', (answer) => {
        if(answer.toLowerCase() === 'y'){
            callApi();
        } else {
            console.log('Exit...')
            input.close();
        }
    });
}

askQuestion();