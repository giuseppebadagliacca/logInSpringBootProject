

// const 
// submitDOM = document.querySelector('#submit'),
// emailInputDom = document.querySelector('#email'),
// phoneInputDom = document.querySelector('#phone'),
// h3DOM = document.querySelector('h3')


// submitDOM.addEventListener('click', checkReEx)

// function checkReEx(){
//     // console.log(typeof emailInputDom.value)
//     if(emailInputDom.value === undefined || emailInputDom.value === ''){
//         setMsg(`Incorrect email input. Please enter using the following format: example@hotmail.com`, 'red', 'lightpink')
//     }else{
//         if(validateEmail(emailInputDom.value)){
//             setMsg(`${emailInputDom.value} is an email! Feel free to check a different email!`,'green', 'lightgreen')
//         }else{
//             setMsg(`${emailInputDom.value} is not a valid email. Please enter using the following format: example@hotmail.com`, 'red', 'lightpink')
//         }
//     }
// }

// function setMsg(msg, color, bckColor){
//     submitDOM.disabled = true
//     h3DOM.innerText = `${msg}`
//     h3DOM.style.color = `${color}`
//     h3DOM.style.background = `${bckColor}`
//     h3DOM.style.padding = `5px`
//     h3DOM.style.borderRadius = `10px`
//     setTimeout(clearMsg, 4000)
// }

// function clearMsg(){
//     submitDOM.disabled = false
//     h3DOM.innerText =''
//     h3DOM.style.color = ''
//     h3DOM.style.background = ''
//     h3DOM.style.padding = ''
//     h3DOM.style.borderRadius = ''
// }

// function validateEmail(email){
//     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ? true:false
//     }