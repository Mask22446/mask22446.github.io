const links = [
    {
        label:"Week1 notes",
        url:"./week1/index.html"
    },
    {
        label: "Week 2 notes",
        url: "./week2/index.html"
    }
]

var olist = document.getElementById("list");

for (let i=0; i < links.length; i++){
    let a = document.createElement("a");
    let li = document.createElement("li");
    a.textContent = links[i].label;
    a.setAttribute('href', links[i].url);
    li.appendChild(a);
    olist.appendChild(li); 
}