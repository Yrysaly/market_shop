
$('#myButton').on('click', function(){
    $('#myElement').fadeOut()
    $('body').css({

             'background-color': 'black'
      
        }
  
    )
           
    $('#myButton')
})



$('#myButton').on('dblclick', function(){
    $('#myElement').fadeIn()
    $('#myButton').css({

        'background-color': 'white'
    
    })
})


const chart = document.getElementById('myChart').getContext('2d')
new Chart(chart, {
    type: 'doughnut',
    data: {
        labels: ['Жоғары', 'Орташа', 'Төмен'],
        datasets: [{lebel: 'Sales', data: [8, 15, 2]}]
    }
})

let input = document.getElementById('input')
let result = document.getElementById('result')
input.addEventListener('keydown', function() {
    if (event.key == 'Enter') {
        result.textContent = input.value 
    }
})
