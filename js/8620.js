'use strict'

function ajax(method, url) {
    let httpReq = new XMLHttpRequest();

    httpReq.open(method, url);

    httpReq.onreadystatechange = function () {
        if (httpReq.readyState == 4) {
            if (httpReq.status == 200) {
                let returnData = httpReq.responseText;
                httpReq.onsuccess(returnData);
                httpReq = null;
            }
        }
    }
    httpReq.onsuccess = function (response) {

        let jsonObj = JSON.parse(response);
        console.log(jsonObj);
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            let aDiv = document.createElement('div');
            $(aDiv).attr('id', 'dane-programisty');
            document.body.appendChild(aDiv);
            aDiv.innerHTML = data.imie + ' ' + data.nazwisko + ', ' + data.zawod + ', ' + data.firma;
        })

        let aDiv = document.createElement('div');
        $(aDiv).attr('id', 'dane-programisty');
        document.body.appendChild(aDiv);



    }
    httpReq.send();
}

function pobierzDane() {
    ajax('GET', 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php');

}


document.getElementById('btn').addEventListener('click', pobierzDane);
