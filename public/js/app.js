// console.log('Client side javascript file is loaded!')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    messageOne.textContent = 'Loading'
    messageTwo.textContent = ''
    // fetch is a function. It is an asynchronus function so you will need a call back function or method to get the information.
    // a function is called by name like fetch. a method is associated to an object
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data)  => {
            if(data.error) {
                console.log(data.error)
                messageOne.textContent = data.error
            } else {
                console.log(data.location)
                messageOne.textContent = data.location
                console.log(data.forecast)
                messageTwo.textContent = data.forecast
            }
        })
    })
})
