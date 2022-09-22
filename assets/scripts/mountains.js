
mountains = document.querySelector("#mountainSelect")
let mountainc = document.querySelector("#mountainCards")
 mountainc = document.querySelector("#mountainCards")

mountains.addEventListener("change", function (event) {

    let selectedMountain = mountainsArray.filter((mountain) => {
        return mountain.name === event.target.value
    })


    generateMountainCard(mountainSelect[0])
    mountainSelect.classList.remove("d-none")

})

mountains.addEventListener("change", function (event) {

    let selectedMountain = mountainsArray.filter((mountain) => {
        return mountain.name === event.target.value
    })
    console.log("selectedMountain is " + selectedMountain)

    generateMountainCard(selectedMountain[0])
    mountainSelect.classList.remove("d-none")

})
// This is a function that generates the selected mountain information

function generateMountainCard(mountain) {
    mountainc.innerHTML = ""
    let card = ""
    card += `<div class="card" style="width: 18rem; margin:0 auto">`
    card += `<img src="assets/images/mountains/${mountain.img}" class="card-img-top" alt="...">`
    card += `<div class="card-body">`
    card += `     <p class="card-title">${mountain.name}</p>`
    card += `     <p class="card-text">${mountain.desc}</p>`
    card += `     <p class="card-text">Elevation: ${mountain.elevation} feet</p>`
    card += `</div>`


    mountainCards.innerHTML += card


}

