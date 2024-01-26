
fetch("whatyearisit-backend-roan.vercel.app")
.then(response => response.json())
.then((data) => {
    
    document.querySelector("#year").textContent = data.year
})