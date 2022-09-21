let filterParkLocation = document.querySelector("#filterByParkLocation")
let filterParkType = document.querySelector("#filterByParkType")
let filterViewAll = document.querySelector("#viewAllParks")
let theLocationsUL = document.querySelector("#locations")
let types = document.querySelector("#types")

//get the dropdown list into the JS file for us to work with

let searchTypeDDL = document.querySelector("#filterOptions");

//get the locations dropdown so we can work with it
let locationsDDL = document.querySelector("#stateListDropdown")

//get the types dropdown so we can work with it
let typesDDL = document.querySelector("#parkTypesListDropdown")

// get the view all dropdown option so we can work with it
let viewAllParks = document.querySelector("#viewAllParks")

// get the cards div into JS for us to work with
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

// This is a function that populates state dropdown when user selects to search by location

function generateLocationsDDLOptions() {
    locationsDDL.innerHTML = `<option value="">Choose A Location</option>`
    locationsArray.forEach((location) => {
        locationsDDL.innerHTML += `<option value="${location}">${location}</option>`
    });
}

// This is a function that populates type dropdown when a user selects to search by park type

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


