

export const getMovies = async (path) => {
    try{
        let url = API_DNS + path

        const response = fetch(url)

        return (await response).json()

    }catch (error) {
        console.log("error getMovies: ", error)
    }
    
}