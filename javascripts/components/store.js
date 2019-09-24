const printToDom = (divId, textToPrint) => {
    const divContainer = document.getElementById(divId);
    divContainer.innerHTML = textToPrint;
};

const makeStore = () => {
    const domString = 'hi new store';
    printToDom('store-container', domString);
}

export default {makeStore};