const treehouseAPI = "https://teamtreehouse.com/profiles/martelilleberre" + ".json";
const treehouseBadgesListItem = document.querySelector(".treehouse-badges");

export async function getBadges() {
    try {
 const response = await fetch(treehouseAPI);
 const result = await response.json(); 
 treehouseBadgesListItem.innerHTML += result.badges.length;
 console.log(result.badges.length);
} catch(error) {
    console.error(error);
}
}