const cardImage = document.querySelector('.card img')

window.onload = () => {
    cardImage.src = 'https://picsum.photos/1920'
    cardImage.onload = () => {
        document.querySelector('.card').classList.remove('loading')
    }
}