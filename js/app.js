


function typeWrite (elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const content = element.innerText;
    element.innerText = '';
    if (!content) return;


    var index = 0;

    const typeLetter = () => {
        if (index < content.length) {
            const l = content.charAt(index);
            if (l == ' ' && index < content.length - 1) {
                index++;
                const m = content.charAt(index);
                element.innerHTML += l + m
            } else {
                element.innerText += l;
            }
            index ++;
        } else {
            clearInterval(typeInterval);
        }
    }

    const typeInterval = setInterval(typeLetter, 120);
}


document.addEventListener('DOMContentLoaded', (e) => {
    typeWrite('typewrite');
    typeWrite('name');
})