let LETTERS = "Hello, world"
let TABLEAU = []

function getLatinCharacterList() {
    for (let i = 0; i < LETTERS.length; i++) {
        TABLEAU.push(LETTERS[i])
    }
    return TABLEAU
}

getLatinCharacterList()
console.log(TABLEAU)