let pageTitle = "Elzero", pageDescription = "Elzero Web School", pageDate = "25/10";

let cardInfo = `
    <div class = "card">
        <h3>Hello ${pageTitle}</h3>
        <p>${pageDescription}</p>
        <span>${pageDate}</span>
    </card>
`

document.write(cardInfo.repeat(4));