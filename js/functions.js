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

export {validate};
