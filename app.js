const headertext = document.getElementById('headertext');
const outhead = document.getElementById('outhead');
const fontsize = document.getElementById('font-size');
const ff = document.getElementById('ff');
const text_color = document.getElementById('text_color');
const headerinput = document.getElementById('headerinput');
const displayhead = document.getElementById('displayhead');
const markimg = document.querySelectorAll('.markimg');
const innertext = document.getElementById('innertext');
const align = document.querySelectorAll('.align');



headertext.onclick = () => {
    displayhead.style.display = "block";
    innertext.style.display = 'none';
    headertext.style.display = 'block';
};

headerinput.onkeyup = ()=>{ 
    outhead.innerHTML = headerinput.value;
    outhead.style.fontSize = '30px';

}
align.forEach(item => {
    item.onchange = () => {
        outhead.style.textAlign = item.value;
    }
});
fontsize.oninput = () => {
    outhead.style.fontSize = fontsize.value + 'px'; 
}
text_color.oninput = () => {
    outhead.style.color = text_color.value;
}
ff.onchange = () => {
    outhead.style.fontFamily = ff.value;
}