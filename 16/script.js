

// Властивість document.cookie в JavaScript дозволяє читати та записувати куки (cookies)
//  пов'язані з поточним документом. Куки - це невеликі фрагменти даних, які зберігаються 
//  на браузері користувача і використовуються для збереження інформації про стан сеансу, 
//  індивідуальні налаштування, автентифікацію тощо.

// Для читання значення куків ви можете просто звернутися до властивості document.cookie:

var cookies = document.cookie;
console.log(cookies);

// Зазвичай значення, повернене document.cookie, є рядком, що містить усі куки, розділені
// крапкою з комою (;). Кожен куки зазвичай представлений у вигляді пари "ім'я=значення".

alert('sdf');
// Для встановлення значення куків ви можете просто присвоїти значення властивості document.cookie. Наприклад:

document.cookie = "username=John Doe;";
console.log('cookies > ', cookies);


// function setCookie(name, value, days) {
//     var expires = "";
//     if (days) {
//         var date = new Date();
//         date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + value + expires + "; path=/";
// }


function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
setCookie('nema', 'val', 1);


