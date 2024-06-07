const campo = document.getElementById('inpute');
const lista = document.getElementById('lista')
var button = document.getElementById('botao')




button.addEventListener('click',()=>{
   var novoItem = document.createElement('li')
   novoItem.innerHTML = campo.value
   
   
   var butao = document.createElement('button')
   lista.appendChild(butao)

   butao.addEventListener('click',()=>{
      lista.removeChild(novoItem)

    
      
   })
   butao.classList.toggle('remover')
   
      novoItem.appendChild(butao)

      lista.appendChild(novoItem)

campo.value = '';

})

 
   