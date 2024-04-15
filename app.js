// // fetch ("https://jsonplaceholder.typicode.com/users/1")
// const emailRef = document.querySelector(".email");

// // 1. Then
// // fetch ("https://jsonplaceholder.typicode.com/users/1").then((response) => {
// //     console.log(response.json())
// // }) fetch statement broken down, gives data locked inside promise

// // fetch ("https://jsonplaceholder.typicode.com/users/1").then(response => {response.json().then(data => {
// //     console.log(data)
// // })
// // }) unlock the data in the promise

// fetch ("https://jsonplaceholder.typicode.com/users/1")
// .then((response) => {
//     return response.json(); //become a promise and returns it
// })
// .then((data) => {
//     console.log(data);
//     emailRef.innerHTML = data.email
// });

// 2.Async/Await best practice in most case scenarios
// async function main() {
//     const response = await fetch ("https://jsonplaceholder.typicode.com/users/1");
//     const data = await response.json()
//     console.log(data)
//     emailRef.innerHTML = data.email
// }

// main();


// HOW TO CREATE A PROMISE - NEEDED FOR A JOB

// const statusRef = document.querySelector('.status');

// function getSubscriptionStatus() { //create function
//     return new Promise((resolve, reject) => { //create promise & return it
//         setTimeout(() => {
//             resolve("VIP")
//         }, 2000); //2 second delay to print to console
       
//     })
// }

//1. Then
// getSubscriptionStatus().then(response => console.log(response))
//don't need .json unless talking to backend, this is all in the frontend


// 2. Async/Await
async function main() {
    const status = await getSubscriptionStatus();
    statusRef.innerHTML = status; 
}

// main();

/**
 * 1.Crete a function called `getVideo`
 * 2. Accept a parameter called `subscriptionStatus`
 * 3. Return a new Promise inside of the function that:
 *      - if "VIP" resolve("show video")
 *      - if "FREE" resolve("no video")
 *      - otherwise reject("no video")
 * 4. console.log the result of getVideo(status) in main()
 */

const videoRef = document.querySelector('.video');

function getVideo(subscriptionStatus) {
    return new Promise ((resolve, reject) => {
        if (subscriptionStatus === "VIP") {
            resolve("show video")
        }
        else if (subscriptionStatus === "FREE") {
            resolve("show trailer")
        }
        else {
            reject("no video")
        }
    })
}

async function main() {
    const status = await getSubscriptionStatus();
    statusRef.innerHTML = status;
    try {
        console.log(await getVideo(status))
    }
    catch (e) {
        console.log(e)
        videoRef.innerHTML = e;
    }
}

main();