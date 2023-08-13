// TODO: Create a function that uses `fetch` to send a POST message

// async function getData() {
//     const response = await fetch('https://randomuser.me/api');
//     const data = await response.json()
//     let index = data.results
//     console.log(index)
//     console.log(index[0].name.first + '/n ' + index[0].name.last + '/n ' + index[0].email + '/n ' + index[0].picture.thumbnail
//         + '/n ' + index[0].dob.age)

// }




async function getRandomUser() {
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json()
    return data.results[0];
}





function createCard(user) {
    console.log(user)

    const bigDiv = document.createElement('div')
    const bivName = document.createElement('div')
    const bivEmail = document.createElement('div')
    const bivpicture = document.createElement('div')
    const picture = document.createElement('img')
    const bivage = document.createElement('div')


    bigDiv.style.border = '3px solid'
    bigDiv.style.width = '300PX'
    bigDiv.style.height = 'auto'


    bivName.innerText = user.name.first + ' ' + user.name.last
    bivEmail.innerText = user.email
    picture.src = user.picture.medium
    bivpicture.append(picture)
    bivage.append(user.dob.age)
    bigDiv.appendChild(bivName);
    bigDiv.appendChild(bivEmail);
    bigDiv.appendChild(bivpicture);
    bigDiv.appendChild(bivage);
    document.body.appendChild(bigDiv)

}


async function showRandomUser() {
    const user = await getRandomUser()
    createCard(user);
}


async function getRandomUsers() {
    const response = await fetch('https://randomuser.me/api?results=5&gender=male');
    const data = await response.json()
    console.log(data)
    return data.results;
}


async function showRandomUser5Mens() {
    const user1 = await getRandomUsers()
    for (i = 0 ; i < 5 ; i++) {
        createCard(user1[i]);
    }
}




async function getjoke() {
    const response = await fetch('https://api.humorapi.com/jokes/search?api-key=62805b0f97ed4ce894e8171cf71768f1');
    const data = await response.json()
    console.log(data)
    console.log(data.jokes[0].joke)
    const div = document.createElement('div')
    div.innerText = data.jokes[0].joke
    document.body.appendChild(div)
   
}
async function getElements() {
    const response = await fetch ('https://fakestoreapi.com/products')
    const dataNew = await response.json()
    console.log(dataNew)
    const list = document.createElement('ol')
    for (i = 0 ; i < dataNew.length ; i++) {
        let li = document.createElement('li')
        li.innerText = dataNew[i].title
        list.appendChild(li)
    }
    document.body.appendChild(list)
 }


function post () {
 const reqOptions = {
    method: 'post',
    body: JSON.stringify({ firstName: 'Israel222k' ,lastName: 'BOBR' , Email: 'emailadrcc2GMAIL.COM' , age: 22 }),
    headers: {
    'Content-Type': 'application/json'
    }
    }
    
    fetch("https://jsonplaceholder.typicode.com/users", reqOptions)
    .then(resp => resp.json())
    .then(json => console.log(json)); 

}




async function getElements1() {
    const response = await fetch ('https://fakestoreapi.com/products')
    const dataNew = await response.json()
    console.log(dataNew)
    const list = document.createElement('div')
    document.body.appendChild(list)
 }



