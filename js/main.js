const links = [
    {
        label:"Week 1 notes",
        url:"./week1/index.html"
    },
    {
        label: "Week 2 notes",
        url: "./week2/index.html"
    },
    {
        label:"Week 3 notes",
        url: "./week3/index.html"
    },
    {
        label:"Week 4 notes",
        url:"./week4/index.html"
    },
    {
        label:"Week 5 notes",
        url:"./week5/index.html"
    },
    {
        label:"Week 6: To Do list",
        url:"./week6/index.html"
    },
    {
        label: "Week 7: Notes and exercise",
        url: "./week7/index.html"
    },
    {
        label: "Week 8: Notes",
        url: "./week8/notes.html"
    },
    {
        label: "Week 9: Notes and exercise",
        url: "./week9/index.html"
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