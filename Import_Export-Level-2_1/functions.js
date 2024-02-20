export const functions = {
    sortOver100: (array) => {
        const filterArray = array.filter((city) => city.population > 100000)
        return filterArray
    },
    sortUnder100: (array) => {
        const filterArray = array.filter((city) => city.population < 100000)
        return filterArray
    }
}

