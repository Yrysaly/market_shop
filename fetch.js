let title = document.getElementById('title')


fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
    console.log(data)
    title.textContent = data[87].title
})
.catch(error => console.log(error))
    


let city = ''

let cities = document.getElementById('cities')
let fint = document.getElementById('fint')
let img = document.getElementById('img')
let temp =document.getElementById('temp')
fint.addEventListener('click', function() {
    city = cities.value 
    fetch(`https://api.weatherapi.com/v1/current.json?key=0a447dc803d64e249b192310252903&q=${city}%7Bcity%7D&aqi=no`)
         .then(response => response.json())
         .then(data => {
            this.console.log(data)
            temp.textContent = 'Температура: ' + data
         })

})