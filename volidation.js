let input = document.getElementById('input')
let text = document.getElementById('text')
let subnit = document.getElementById('subnit')
input.addEventListener('input', function(){
    if (input.value.length < 8) {
        text.textContent = 'Құпиясөз ұзындығы кемінде 8 әріп болу керек'
        text.style.color = 'red'
    } else {
        text.textContent= 'Дұрыс'
        text.style.color='green'
    }

})
subnit.addEventListener('click', function(){
    if (input.value.length<8){
        input.setCustonValidity('Өрісті толтырыңыз')
    } else {
        input.setCustonValidity('')
    }
})


input.addEventListener('focus',function(){
    text.textContent= 'Өрісті толтырыңыз'
    text.style.color = 'orange'
})
input.addEventListener('blur', function(){
    text.textContent=''
})