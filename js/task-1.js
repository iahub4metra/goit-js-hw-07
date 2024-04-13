const list = document.querySelector('#categories');
const listItem = document.querySelectorAll('.item');
const itemCount = listItem.length;
console.log(`Number of categories: ${itemCount}`);
listItem.forEach(item => {
    const title = item.querySelector('h2');
    console.log(`Category: ${title.textContent}`)
    const items = item.querySelectorAll('ul > li');
    console.log(`Elements: ${items.length}`);
});

