

const sendData = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        body: data,
    })

    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
    }

    return await response.json();
};

const sendCard = () =>{

    const cardForm = document.querySelector('#formElem');

    

    cardForm.addEventListener('submit', e =>
    {
        e.preventDefault();

        const formData = new FormData(cardForm);

        const data = {};

        for (const [key, value] of formData) {
            data[key] = value;
        }

        console.log(data);

        sendData('index.php',formData)
            .then(() => {
                cardForm.reset();
            })
            .catch((err) => {
                cardForm.reset();
                console.log(err);
            });
    })
}


const getResourse = async (url) =>
{
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
    }

    return await response.json();
};

sendCard();
// getResourse('index.php');    