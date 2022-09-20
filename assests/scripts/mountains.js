// get the selectedMountainDiv onto the page so we can work with it
let selectedMountainDiv = document.querySelector("#selectedMountainDiv")


// When user selects a mountain in the dropdown, this code is executed
mountainsDDL.addEventListener("change", function (event) {

    let selectedMountain = mountainsArray.filter((mountain) => {
        return mountain.name === event.target.value
    })

    generateMountainCard(selectedMountain[0])
    selectedMountainDiv.classList.remove("d-none")

})

// This is a function that generates the selected mountain information

function generateMountainCard(mountain) {
    selectedMountainDiv.innerHTML = ""
    let card = ""
    card += `<div class="card" style="width: 18rem;">`
    card += `<img src="assets/images/mountains/${mountain.img}" class="card-img-top" alt="...">`
    card += `<div class="card-body">`
    card += `     <h5 class="card-title">${mountain.name}</h5>`
    card += `     <p class="card-text">${mountain.desc}</p>`
    card += `     <p class="card-text">Elevation: ${mountain.elevation} feet</p>`
    card += `</div>`


    selectedMountainDiv.innerHTML += card

}

