'use strict';

const images = [
    { 'id': '1', 'url':'_imagem/f1.jpg' },
    { 'id': '2', 'url':'_imagem/f2.jpg' },
    { 'id': '3', 'url':'_imagem/f3.png' },
    { 'id': '4', 'url':'_imagem/f4.jpg' },
    { 'id': '5', 'url':'_imagem/f5.jpg' },
    { 'id': '6', 'url':'_imagem/f6.jpg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);