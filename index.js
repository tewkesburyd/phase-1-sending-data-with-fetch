// // Add your code here
// const createFormAndH1 = () => {
//     //create const 
//     const locationForNewElements = document.querySelector('body')
//     const createH1 = document.createElement('h1')
//     const createForm = document.createElement('form')
//     const createFirstLabel = document.createElement('label')
//     const createSecondLabel = document.createElement('label')
//     const lineBreak = document.createElement('br')
    

//     //create new H1 and Form elements
//     locationForNewElements.append(createH1, createForm)
//     createH1.textContent = "Sample Form"
//     //create labels in form and insert break between
//     createForm.append(createFirstLabel)
//     createFirstLabel.textContent = "Dog Name"
//     createForm.appendChild(lineBreak)
//     createForm.append(createSecondLabel)
//     createSecondLabel.textContent = "Dog Breed"
    

//     //create inputs set form attributes and input for Dog Name
//     const newFirstInput = document.createElement('input')
//     createFirstLabel.append(newFirstInput)
//     newFirstInput.setAttribute("type", "text")
//     newFirstInput.setAttribute("name", "dogName")
//     newFirstInput.setAttribute("id", "dogName")
    
//     //create inputs set form attributes and input for Dog Breed
//     const newSecondInput = document.createElement('input')
//     createSecondLabel.append(newSecondInput)
//     newSecondInput.setAttribute("type", "text")
//     newSecondInput.setAttribute("name", "dogBreed")
//     newSecondInput.setAttribute("id", "dogBreed")
//     newSecondInput.append(lineBreak)

//     //creates Button
//     const button = document.createElement('input')
//     createForm.appendChild(button)
//     button.setAttribute("type", "submit")
//     button.setAttribute("id", "submit")
//     button.setAttribute("value", "submit")

//     //set form attributes
//     createForm.setAttribute("action","http://localhost:3000/dogs")
//     createForm.setAttribute("method", "post")

//     //event listener
//     createForm.addEventListener('submit', (e) =>{
//         e.preventDefault
//     })

//     //configure to json format and collect input data
//     const name = document.querySelector('#dogName')
//     const breed = document.querySelector('#dogBreed')
//     //name.value = 
    
    


    // const configureObj = () => {
    //     method: "POST",
    //     Headers: {
    //         "content-type": "application/json",
    //         "accept": "application/json"
    //     },
    //     body: JSON.stringify({
    //         dogName: "",
    //         dogBreed: ""
    //     })
    // }
    

//}



//This is optimistic
// fetch('http://localhost:3000/dogs',{
//     method: 'POST',
//     headers: {
//         "Content-Type" : "aplication/json"
//     },
//     body: {
//         JSON.strigify(somethin)
//     }
// })

//this is pessimistic
// fetch('http://localhost:3000/dogs',{
//     method: 'POST',
//     headers: {
//         "Content-Type" : "aplication/json"
//     },
//     body: {
//         JSON.strigify(somethin)
//     }
// })
// .then(resp => resp.json())
// .then(data => function(data))

//createFormAndH1()

const submitData = (name, email) => {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
        }),
        })
    .then((res) => res.json())
    .then((data) => {
        document.body.innerHTML = data["id"]
    })
    .catch((error) => {
        document.body.innerHTML = error.message
    })
}