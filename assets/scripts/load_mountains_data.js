
let mountains = document.querySelector("#mountainSelect")
let mountainsArray = []

window.onload = function(){

    loadJsonData("assets/data/mountains.json").then((mountainsdata) => {
        mountainsArray = mountainsdata.mountains;

        mountainsArray.forEach((mountain) => {
            mountains.innerHTML += `<option value="${mountain.name}">${mountain.name}</option>`
        });

    })

}

//function that can "fetch" the sunset/sunrise times
let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}