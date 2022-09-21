let filterParkLocation = document.querySelector("#filterByParkLocation")
let filterParkType = document.querySelector("#filterByParkType")
let filterViewAll = document.querySelector("#viewAllParks")
let theLocationsUL = document.querySelector("#locations")
let types = document.querySelector("#types")

// get the downdwn lsit
let searchTypeDDL = document.querySelector("#filterOptions");

let locationsDDL = document.querySelector("#stateListDropdown")

let typesDDL = document.querySelector("#parkTypesListDropdown")

let viewAllParks = document.querySelector("#viewAllParks")

let resultsCardDiv = document.querySelector("#resultCardsDiv")


//hide all the dropdowns and then check which is supposed to show below
searchTypeDDL.addEventListener("change", function (event) {
    locationsDDL.classList.add("d-none");
    typesDDL.classList.add("d-none");
    resultsCardDiv.classList.add("d-none")

    if (event.target.value === "location") {
        generateLocationsDDLOptions()
        locationsDDL.classList.remove("d-none")
        typesDDL.classList.add("d-none")
    }

    if (event.target.value === "type") {
        generateTypesDDLOptions()
        typesDDL.classList.remove("d-none")
        locationsDDL.classList.add("d-none")
    }
    if (event.target.value === "all") {
        // call the funciton that makes all parks into cards and hide the other 2 dropdowns and show the cards
        generateParkCards(nationalParksArray)
        resultsCardDiv.classList.remove("d-none")
    }
})

// Function that populates state/location dropdown

function generateLocationsDDLOptions() {
    locationsDDL.innerHTML = `<option value="">Choose A Location</option>`
    locationsArray.forEach((location) => {
        locationsDDL.innerHTML += `<option value="${location}">${location}</option>`
    });
}

// Function that populates parktype dropdown 

function generateTypesDDLOptions() {
    typesDDL.innerHTML = `<option value="">Choose A Park Type</option>`
    parkTypesArray.forEach((type) => {
        typesDDL.innerHTML += `<option value="${type}">${type}</option>`
    })
}
// When user selects a state in the dropdown, this code is executed
locationsDDL.addEventListener("change", function (event) {

    let filteredLocationArray = nationalParksArray.filter((parks) => {
        return parks.State === event.target.value
    })

    generateParkCards(filteredLocationArray)
    resultsCardDiv.classList.remove("d-none")

})

// When user selects a park type in the dropdown, this code is executed
typesDDL.addEventListener("change", function (event) {

    let filteredTypeArray = nationalParksArray.filter((parks) => {
        return parks.LocationName.toLowerCase().includes(event.target.value.toLowerCase())
    })

    generateParkCards(filteredTypeArray)
    resultsCardDiv.classList.remove("d-none")
})

// function that creates a card for each item in the array

function generateParkCards(someArray) {
    resultsCardDiv.innerHTML = ""

    someArray.forEach((park) => {
        let card = ""
        card += `<div class="col">`
        card += `<div class="card">`
        card += `   <div class="card-body">`
        card += `       <p class="card-title">${park.LocationName}<p>`
        card += `       <p class="card-text">${park.Address}</p>`
        card += `       <p class="card-text">${park.City}, ${park.State} ${park.ZipCode}</p>`
        if (park.Visit !== undefined) {
            card += `       <a href="${park.Visit}" target = "_blank" class="card-link">Find Out More!</a>`
        }
        card += `   </div>`
        card += `</div>`
        card += `</div>`

        
        resultsCardDiv.innerHTML += card

    })
}


