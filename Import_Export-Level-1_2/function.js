export const functions = {
    firstElement: (array) => {
        return array[0]
    },
    expectLast: (array) => {
        return [...array].slice(0, array.length - 1)
    },
    lastElement: (array) => {
        return array[array.length - 1]
    },
    expectFirst: (array) => {
        return [...array].slice(1, array.length)
    },
    removeElement: (array, element) => {
        let returnArray = []
        for (let i = 0; i < array.length; i++) {
            if(array[i] != element) {
                returnArray.push(array[i])
            }
        }

        return returnArray
    },
    withoutDuplicates: (array) => {
        return [...new Set(array)]
    },
    arraySum: (array) => {
        return array.reduce((a,b) => a + b, 0)
    },
    randomNumber: (a,b) => {
        return Math.floor(Math.random() * (a-b)) + b
    },
    firstCapitalLetter: (string) => {
        return string[0].toUpperCase() + string.slice(1);
    },
    capitalLetter: (string) => {
        return string.toUpperCase()
    },
    lastLetterCheck: (string, letter) => {
        string[string.length - 1] !== letter ? console.log("Stimmt nicht überein") : console.log("Stimmt überein");;
    }
}

export default functions