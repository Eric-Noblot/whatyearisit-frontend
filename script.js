const year = document.querySelector("#year")

// fetch("http://localhost:3000/year")
// .then(response => response.json())
// .then((data) => {
//     console.log(data)
//     year.textContent = data.year
// })

fetch("whatyearisit-backend-roan.vercel.app")
.then(response => response.json())
.then((data) => {
    console.log(data)
    year.textContent = data.year
})