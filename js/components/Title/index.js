function Title(css, ...values) {
    console.log(values)
    
    return `
        <h1 style="${css[0]} ${css[1]}">
            ${values[0]}

            
        
            <small>${values[1]}</small>
            <em>${values[2]}</em>

        </h1>`
}
