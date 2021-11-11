const links = document.querySelectorAll('.menu__link')

links.forEach(function(linkClicado) {
    linkClicado.addEventListener('click', function() {
        links.forEach(function(link) {
            link.classList.remove('ativo')
        })
        linkClicado.classList.add('ativo')
    })
})