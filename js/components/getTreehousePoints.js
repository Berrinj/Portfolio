const treehouseAPI = "https://teamtreehouse.com/profiles/martelilleberre" + ".json";
const treehousePointsListItem = document.querySelector(".treehouse-points");

export async function getPoints() {
    try {
 const response = await fetch(treehouseAPI);
 const result = await response.json(); 
 treehousePointsListItem.innerHTML += result.points.total;
} catch(error) {
    console.error(error);
}
}