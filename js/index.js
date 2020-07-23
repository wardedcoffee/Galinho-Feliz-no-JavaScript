const root = document.querySelector('#root')
const textTitle = 'Marcos'
const textSmall = 'Text pequeno'
const otherText = 'Outro texto'

// Tagged Template String
const title = Title`
    color: red;
    ${textTitle}
    font-size: 20px;
    ${textSmall}
    ${otherText}
`

root.insertAdjacentHTML("beforeend", title)