const pathGueio = 'images/difficulty_one.jpg'
const gueio = Character`
    width: 20%;
    ${pathGueio}
`

const WrapperCharacters = (css, children) => (`
        <div style="${css}">${children}</div>
    `)


const wrapperCharacters = WrapperCharacters`
    display: flex;
    justify-content: space-evenly;
    ${gueio + gueio + gueio}

`