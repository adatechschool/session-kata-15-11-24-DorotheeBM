let LETTERS = "Hello, world"
let ARRAY = []

function getLatinCharacterList() {
    for (let i = 0; i < LETTERS.length; i++) {
        ARRAY.push(LETTERS[i])
    }
    return ARRAY
}

getLatinCharacterList()
console.log(ARRAY)

const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

console.log(latinToMorse["A"])

//function translateLatinCharacter()
//
