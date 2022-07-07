console.log("Hello")
const button1 = document.querySelector("#btn1")

const btnClicked = () => {
    axios.get("https://swapi.dev/api/planets/?search=Alderaan")
    .then((response) => {
        let residents = response.data.results[0].residents
        console.log(response.data)

         for (let i = 0; i < residents.length; i++) {
             console.log(residents[i])
            axios.get(residents[i])
                .then((response)=> {
                    console.log(response.data)
                    let h2 = document.createElement("h2")
                    h2.textContent = response.data.name
                    document.querySelector("body").appendChild(h2)
                })
            
        }
    })
}

button1.addEventListener('click', btnClicked)

