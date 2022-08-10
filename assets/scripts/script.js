function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
    }  
   const titulo = document.querySelector('.titulo');
   typeWriter(titulo);

   var menu = document.querySelector('nav ul');
   var menuBar = document.querySelector('nav .menu-icon');
   var iconMenu = document.querySelector('nav .menu-icon img');
   
   menuBar.addEventListener('click',function(){
   
       if (iconMenu.getAttribute("src") == './assets/images/menua.png') {
           iconMenu.setAttribute("src","./assets/images/closea.png");
       }else{
           iconMenu.setAttribute("src","./assets/images/menua.png");
       }
   
      menu.classList.toggle('active');
   });

   const menuItens = document.querySelectorAll('.menu a')
   menuItens.forEach(item => {
    item.addEventListener('click',scrollToIdOnClick)
   })

   function scrollToIdOnClick(event){
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href')
    const to = document.querySelector(id).offsetTop;
    window.scroll({
        top: to -80,
        behavior: "smooth"
    })
    console.log(section)
   }

let formValidator = {
    handleSubmit:(event)=>{
        event.preventDefault()
        let send = true

        let inputs = form.querySelectorAll('.inputs')

        formValidator.clearErros()

        for(let i=0;i<inputs.length;i++){
            let input = inputs[i]
            let check = formValidator.checkInput(input)
            if(check !== true){
                send = false
                formValidator.showError(input, check)
            }
        }

        if(send){
            form.submit()
        }
    },

        checkInput:(input) =>{
            let rules = input.getAttribute('data-rules')

            if(rules !== null){
                rules = rules.split('|')
                for(let k in rules){
                    let rDetails = rules[k].split('=')                    
                    switch(rDetails[0]){
                        case 'required':
                            if(input.value == ''){
                                return 'Campo obrigatório, por favor preencher!'
                            }
                        break;
                        case 'min':
                        break
                    }
                }
            }
            return true;
        },
        showError:(input, error) =>{
            input.style.borderColor = '#FF0000'
            let errorElement = document.createElement('p')
            errorElement.classList.add('error')
            errorElement.innerHTML = error

            input.parentElement.insertBefore(errorElement, input.ElementSibling)
        },
        clearErros:() =>{
            let inputs = form.querySelectorAll('.inputs')
            for(let i=0;i<inputs.length;i++){
                inputs[i].style = ''
            }
            let errorElements = document.querySelectorAll('.error')
            for(let i=0;i<errorElements.length;i++){
                errorElements[i].remove()
            }
        }
} 
   
   let form = document.querySelector('.formcontato')
   form.addEventListener('submit',formValidator.handleSubmit)


   function mask(o, f) {
    setTimeout(function() {
      var v = mphone(o.value);
      if (v != o.value) {
        o.value = v;
      }
    }, 1);
  }
  
  function mphone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      r = r.replace(/^(\d*)/, "($1");
    }
    return r;
  }

  AOS.init({
    duration: 1200,
  })

 