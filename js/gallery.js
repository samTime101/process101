const items = document.querySelectorAll('.item');
let currentItemIndex = 0;

function showItem(index) {
    items.forEach((item, i) => {
        if (i === index) {
            item.style.display = 'block';
        } else {
            // HIDING OTHER IMAGE
            item.style.display = 'none';
        }
    });
}

showItem(currentItemIndex);

document.getElementById('prev').addEventListener('click', function () {
    currentItemIndex = (currentItemIndex - 1 + items.length) % items.length;
    showItem(currentItemIndex);
});

document.getElementById('next').addEventListener('click', function () {
    currentItemIndex = (currentItemIndex + 1) % items.length;
    showItem(currentItemIndex);
});