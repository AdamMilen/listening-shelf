"use strict";
// Edit the collection here. Tracklists describe standard releases unless noted.
const albums = [
  {artist:"Bob Dylan",title:"Nashville Skyline",year:1969,genre:"Country / Folk",color:"#4a7181",tracks:["Girl from the North Country (with Johnny Cash)","Nashville Skyline Rag","To Be Alone with You","I Threw It All Away","Peggy Day","Lay Lady Lay","One More Night","Tell Me That It Isn't True","Country Pie","Tonight I'll Be Staying Here with You"]},
  {artist:"John Coltrane",title:"A Love Supreme",year:1965,genre:"Jazz",color:"#353b38",tracks:["Part I – Acknowledgement","Part II – Resolution","Part III – Pursuance","Part IV – Psalm"]},
  {artist:"Billy Joel",title:"The Stranger",year:1977,genre:"Pop / Rock",color:"#6c635b",tracks:["Movin' Out (Anthony's Song)","The Stranger","Just the Way You Are","Scenes from an Italian Restaurant","Vienna","Only the Good Die Young","She's Always a Woman","Get It Right the First Time","Everybody Has a Dream"]},
  {artist:"Pink Floyd",title:"Wish You Were Here",year:1975,genre:"Progressive Rock",color:"#577073",tracks:["Shine On You Crazy Diamond (Parts I–V)","Welcome to the Machine","Have a Cigar","Wish You Were Here","Shine On You Crazy Diamond (Parts VI–IX)"]},
  {artist:"The Beatles",title:"Abbey Road",year:1969,genre:"Rock",color:"#626947",tracks:["Come Together","Something","Maxwell's Silver Hammer","Oh! Darling","Octopus's Garden","I Want You (She's So Heavy)","Here Comes the Sun","Because","You Never Give Me Your Money","Sun King","Mean Mr. Mustard","Polythene Pam","She Came In Through the Bathroom Window","Golden Slumbers","Carry That Weight","The End","Her Majesty"]},
  {artist:"The Doors",title:"The Doors",year:1967,genre:"Psychedelic Rock",color:"#8b4e2e",tracks:["Break On Through (To the Other Side)","Soul Kitchen","The Crystal Ship","Twentieth Century Fox","Alabama Song (Whisky Bar)","Light My Fire","Back Door Man","I Looked at You","End of the Night","Take It as It Comes","The End"]},
  {artist:"Foo Fighters",title:"But Here We Are",year:2023,genre:"Alternative Rock",color:"#817e71",tracks:["Rescued","Under You","Hearing Voices","But Here We Are","The Glass","Nothing at All","Show Me How","Beyond Me","The Teacher","Rest"]},
  {artist:"Eagles",title:"To the Limit: The Essential Collection",year:2024,genre:"Rock",color:"#9c6635",format:"2LP",note:"19-track 2LP edition assumed from your collection list; check against your sleeve.",tracks:["Take It Easy","Peaceful Easy Feeling","Witchy Woman","Desperado","Tequila Sunrise","The Best of My Love","Lyin' Eyes","One of These Nights","Take It to the Limit","Life in the Fast Lane","New Kid in Town","I Can't Tell You Why","Heartache Tonight","Love Will Keep Us Alive (Hell Freezes Over)","How Long","Hotel California (Live at the Forum '76)","Already Gone (Live at the Forum '76)","In the City (Hell Freezes Over)","The Long Run (Live from the Forum MMXVIII)"]},
  {artist:"Led Zeppelin",title:"IV",year:1971,genre:"Hard Rock",color:"#66533a",format:"Remaster",tracks:["Black Dog","Rock and Roll","The Battle of Evermore","Stairway to Heaven","Misty Mountain Hop","Four Sticks","Going to California","When the Levee Breaks"]},
  {artist:"Masayoshi Takanaka",title:"The Rainbow Goblins",year:1981,genre:"Jazz Fusion",color:"#59766c",tracks:["Prologue","Once Upon a Song","Seven Goblins","The Sunset Valley","The Moon Rose","Soon","Magical Night Light","Rainbow Paradise","Thunderstorm","Rising Arch","Just Chuckle","Rainbow Was Reborn","Plumed Bird","You Can Never Come to This Place"]}
];
const search = document.querySelector("#search");
const genre = document.querySelector("#genre");
const grid = document.querySelector("#albums");
for (const name of [...new Set(albums.map(album => album.genre))].sort()) {
  const option = document.createElement("option"); option.value = name; option.textContent = name; genre.append(option);
}
function element(tag, text, className) {
  const node = document.createElement(tag); if (text) node.textContent = text; if (className) node.className = className; return node;
}
function render() {
  const query = search.value.trim().toLocaleLowerCase();
  const visible = albums.filter(album => (genre.value === "all" || genre.value === album.genre) && [album.artist, album.title, ...album.tracks].join(" ").toLocaleLowerCase().includes(query));
  grid.replaceChildren();
  visible.forEach(album => {
    const card = element("article", null, "album");
    const sleeve = element("div", null, "sleeve"); sleeve.style.setProperty("--cover", album.color); sleeve.setAttribute("aria-hidden", "true");
    sleeve.append(element("small", "THE LISTENING SHELF"), element("b", album.title), element("span", album.artist.toUpperCase()));
    const info = element("div", null, "info");
    info.append(element("h3", album.title), element("p", album.artist, "artist"), element("p", `${album.year} / ${album.genre}${album.format ? ` / ${album.format}` : ""}`, "meta"));
    const details = element("details"); details.append(element("summary", `Tracklist · ${album.tracks.length} tracks`));
    if (album.note) details.append(element("p", album.note, "edition"));
    const list = element("ol"); album.tracks.forEach(track => list.append(element("li", track))); details.append(list); info.append(details); card.append(sleeve, info); grid.append(card);
  });
  document.querySelector("#count").textContent = `${visible.length} of ${albums.length} records on the shelf`;
  document.querySelector("#empty").hidden = visible.length !== 0;
}
search.addEventListener("input", render); genre.addEventListener("change", render); render();
