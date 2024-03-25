function generateList(array) {
    let result = '<ul>';

    array.forEach(item => {
        if (Array.isArray(item)) {
            result += '<li><ul>';
            item.forEach(subItem => {
                result += `<li>${subItem}</li>`;
            });
            result += '</ul></li>';
        } else {
            result += `<li>${item}</li>`;
        }
    });

    result += '</ul>';
    return result;
}

const array = [1, 2, [3.1, 3.2], 4, 5];
const arrayBloc = document.getElementById('arrayBloc');
arrayBloc.innerHTML = `${generateList(array)}`;

