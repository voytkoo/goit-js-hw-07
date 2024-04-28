const categoriesList = document.querySelector('#categories');

const categoriesItems = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(categoryItem => {
    const categoryName = categoryItem.querySelector('h2').textContent.trim();
    const categoryItemCount = categoryItem.querySelectorAll('li');

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryItemCount.length}`);
});




