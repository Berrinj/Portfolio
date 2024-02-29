const treehouseAPI = "https://teamtreehouse.com/profiles/martelilleberre" + ".json";
const treehouseBadgesListItem = document.querySelector(".badges");
const treehouseBadgesLastAchieved = document.querySelector(".last-achieved");
const errorMessage = document.querySelector(".stats")


export async function getBadges() {
    try {
 const response = await fetch(treehouseAPI);
 const result = await response.json(); 

    const lastIndex = result.badges.length - 1;

 const earnedDate = new Date(result.badges[lastIndex].earned_date).toLocaleDateString('nb-NO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
});

 treehouseBadgesListItem.innerHTML = `<b>${result.badges.length}</b>`;
 treehouseBadgesLastAchieved.innerHTML += `<br>${earnedDate}`;
} catch(error) {
    errorMessage.innerHTML = "<li>Klarte ikke hente data fra treehouse API</li>";
    console.error(error);
}
}