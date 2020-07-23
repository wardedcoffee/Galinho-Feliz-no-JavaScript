const root = document.querySelector('#root')
const textTitle = 'Dificuldade'


// Tagged Template String
const title = Title`
    color: red;
    font-size: 20px;
    ${textTitle}
    
`

root.insertAdjacentHTML("beforeend", title)