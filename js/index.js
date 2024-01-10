const button = document.getElementById('button');
const name = document.getElementById('name');
const color = document.getElementById('color');
const price = document.getElementById('price');
const type = document.getElementById('type');
const picture = document.getElementById('picture');
const description = document.getElementById('description');
const form = document.getElementById('form');

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }


const validate = (name, color, price, type, picture, description) => {
    if(!name.value) {
        name.focus();
        alert('Name is empty');
        return false;
    }

    if(!price.value) {
        price.focus();
        alert('Price is empty');
        return false;
    }

    if(!color.value) {
        color.focus();
        alert('Color is empty');
        return false;
    }

    if(!type.value) {
        type.focus();
        alert('Type is empty');
        return false;
    }

    if(!picture.value) {
        picture.focus();
        alert('Picture is empty');
        return false;
    }

    if(!validURL(picture.value)) {
        picture.focus();
        alert('Picture is not in URL');
        return false;
    }

    return true;
}

function getDataFromLocalStorage() {
    const data = [];
        if(localStorage.getItem('phones')) {
            data = JSON.parse(localStorage.getItem('phons'));
        }
    return data;
}

button && button.addEventListener('click', function() {
    if(validate(name, color, price, type, picture, description)) {
        const phone = {
            name: name.value,
            price: price.value,
            type: type.value,
            color: color.value,
            description: description.value,
            picture:picture.value,
        };

        let data = getDataFromLocalStorage();
        data.push(phone);
        localStorage.setItem('phones', JSON.stringify(data));

        form.reset();
    } else {
        console.log('Validate error');
    }
});