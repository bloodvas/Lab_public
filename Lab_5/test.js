
const getResponse = async (url) =>
{
    const response = await fetch(url);
    
    if (!response.ok)
    {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
    }
    return await response.json();
};

const data = getResponse('https://jsonplaceholder.typicode.com/todos/1');