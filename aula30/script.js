const bodybg = document.body;
const btnChange = document.querySelector('#btn-toogle-dark');
const h1Title = document.querySelector('h1');
const listItems = document.li;

let theme = 'light'

function changeTheme(){
    if(theme == 'light'){
        theme = 'dark';
        bodybg.style.backgroundColor = "black";
        btnChange.innerText = "Light Mode";
        h1Title.style.color = "orange";
        listItems.style.color = "orange"
    }
    else{
        theme = 'light';
        h1Title.style.color = "gray";
        bodybg.style.backgroundColor = "white";
        btnChange.innerText = "Dark Mode";
        listItems.style.color = "black";
    }
}