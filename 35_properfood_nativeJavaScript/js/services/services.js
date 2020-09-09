//пишем функцию postData, которая обрабатывает запрос к серверу, fetch'ит.
//Получаем ответ от сервера, например, что запостили успешно. После этого трансформирует ответ в JSON-формат.
const postData = async (url, data) => { // postData - отвечает за постинг данных на сервер. async - внутри функции будет асинхронный код, для async необходимо использовать парный оператор await, await ставим перед теми операциями, которые нужно дождаться. async и await всегда используются вместе.
    let res = await fetch(url, { // fetch - запрос. Fetch API предоставляет интерфейс JavaScript для работы с запросами и ответами HTTP. Он также предоставляет глобальный метод fetch(), который позволяет легко и логично получать ресурсы по сети асинхронно. Подобная функциональность ранее достигалась с помощью XMLHttpRequest.
    // await - сначала ждёт пока запрос будет отправлен на сервер и только когда получили ответ от сервера записываются данные в переменную res.
        //Задаём настройки - метод и body (которое отправляем).
        method: 'POST',
        headers: { //Заголовки, какой контент мы отправляем.
            'Content-Type': 'application/json'
        },
        body: data //данные формы.
    }); 
    //Обрабатываем JSON-формат.
    return await res.json(); //Обозначение объектов JavaScript (JSON - JavaScript Object Notation) - стандартный текстовый формат для представления структурированных данных на основе синтаксиса объекта JavaScript. Он обычно используется для передачи данных в веб-приложениях (например, отправка некоторых данных с сервера клиенту,таким образом чтобы это могло отображаться на веб-странице или наоборот).
    // await - дожидаемся окончания работы промисса json() и только после этого он его возвращает из функции.
};

const getResource = async (url) => { //Получаем данные с сервера.
    let res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json(); 
};

export {postData};
export {getResource};