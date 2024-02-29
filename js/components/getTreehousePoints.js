const treehouseAPI = "https://teamtreehouse.com/profiles/martelilleberre" + ".json";
const treehousePointsListItem = document.querySelector(".treehouse-points");
const treehouseJsPoints = document.querySelector(".treehouse-js-points");

export async function getPoints() {
    try {
 const response = await fetch(treehouseAPI);
 const result = await response.json(); 
 treehousePointsListItem.innerHTML += `<b>${result.points.total}</b>`;
 treehouseJsPoints.innerHTML += `<b>${result.points.JavaScript}</b>`;
} catch(error) {
    treehousePointsListItem.innerHTML += "Klarte ikke hente poeng data fra treehouse API.";
    console.error(error);
}
}