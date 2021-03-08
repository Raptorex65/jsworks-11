// PROMISE BASIC SYNTAX
const myPromise = new Promise();

const myPromise = new Promise((resolve, reject) => {  
    // condition
});

const myPromise = new Promise((resolve, reject) => {  
    let condition;  
    
    if('condition is met') {    
        resolve('Promise is resolved successfully.');  
    } else {    
        reject('Promise is rejected');  
    }
});

//AFTER JUST FOR RESOLVED PROMISES WE CAN USE THEN() 
//FOR REJECTED ONES USE CATCH() PHRASE AFTER

myPromise.then((message) => { 
    console.log(message);
}).catch((message) => { 
    console.log(message);
});


function loginUser(email, password){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            conseole.log("Now we have the data");
            resolve({userMail: email});
        }, 3000);
    });
}

function getUserVideos(email){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(["video1", "video2", "video3"]);
        }, 2000);
    });
}

function videoDetails(video){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("title of the video");
        }, 2000);
    });
}

//Fonksiyonlarda tanimlanan promise yapilarini asagidaki gibi kisa sekilde globalde kullanabiliriz
loginUser('ed', 'bumba')
.then(user => getUserVideos(user.email))
.then(videos => videoDetails(videos[0]))
