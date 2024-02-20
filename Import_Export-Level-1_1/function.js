export default function sortFunction(array){
    const sortArray = array.sort((a,b) => {
        if(a < b) {
            return -1
        } else if (a > b){
            return 1
        } else {
            return 0
        }
    })

    return sortArray
}

