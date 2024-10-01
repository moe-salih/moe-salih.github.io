

const typewrite = document.getElementById('typewrite')

document.addEventListener('DOMContentLoaded', (e) => {
    const twcontent = typewrite.innerText;
    typewrite.innerText = ''


    let index = 0
    
    const typeLetter = () => {
        if (index <= twcontent.length) {
            typewrite.innerText += twcontent.charAt(index)
            index++
        } else {
            clearInterval(typeInerval);
        }
    }

    const typeInerval = setInterval(typeLetter, 128)

})