// *** JSON Data load with fetch...

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
      .then(data => getData(data))

function getData(responseData) {
    const inner = document.getElementById('cardsDiv')
    responseData.map((cb)=> {
        // console.log(cb);
        const {name, id, email} = cb
        let innerCards = document.createElement('div')
         innerCards.innerHTML = `
         <div class="card">
         <img src="./Din Islam Profile.jpg" alt="">
        <div class="card-body">
         <p><span> id: </span>${id}</p>
        <p><span> Name: </span>${name}</p>
        <p> <span> Email:</span>${email}</p>
          <button id="user_btn" onclick="showDetails('${id}')">See more</button>
         </div>
        </div>
         `
        inner.append(innerCards)
    })
}

function showDetails(reciveData) {
    // console.log(reciveData);
    const url = `https://jsonplaceholder.typicode.com/users/${reciveData}`
    fetch(url)
    .then(res => res.json())
    .then(data =>  personalData(data))
}
function personalData(reciveInfo) {
    const { id, name, email, address: { city, suite:Jata, street, zip}, website, phone } = reciveInfo;
    let newWindow =( window.open)('', "_blank");
    newWindow.document.body.innerHTML = `
    <div class="cards" style="text-align: center;">
            <img src="./Din Islam Profile.jpg" alt="" style="border-radius: 30%; width: 30%;">

            <div class="card-body">
                <p><span> id: </span>${id}</p>
                <p><span> Name: </span>${name}</p>
                <p> <span> Email:</span>${email}</p>
                <p> <span> City:</span>${city}</p>
                <p> <span> Street:</span>${street}</p>
                <p> <span> Website
                <button onclick="goBack()" style="width: 7rem; height: 3rem; background-color: #3498db; color: white;">Go Back</button>
    `
    newWindow.goBack = function () {
        newWindow.close();
        // window.history.back()
    };
    }

// function singleUserInfo(){
//     window.history.back()
// }









// async function dataLoad() {
//     try {
//         const url = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await url.json()
//         usersInfo(data)
//         console.log();
//     } catch (error) {
//         console.log(error);
//     }
// }
// dataLoad()

// async function singleUserInfo(id) {
//     const url = await fetch('https://jsonplaceholder.typicode.com/users')
// }

// function usersInfo(users) {
//     const cardsDiv = document.getElementById('cardsDiv')
//     // console.log(users);
//     users.map((user) => {
//         // console.log(user);
//         let innerCards = document.createElement('div')
//         innerCards.setAttribute('class', 'cards')
//         const {name, id, username} = user
//         cardsDiv.appendChild(innerCards)
//         innerCards.innerHTML = `
//         <div class="card">
//         <img src="./Card JSON/shahin.jpg" alt="">
//         <h3 class="user_id">User id: ${id}</h3>
//         <h2 class="user_title">Name: ${user.name}</h2>
//         <h4 class="user_surname">SurNam ${username}</h4>
//         <button class="user_btn" onclick="singleUserInfo(${id})">More Details...</button>
//         </div>`
//     })
// }
// usersInfo() 