$('.owl-carousel').owlCarousel({
    //para o caso de chagar ao final da lista de imagens volta para a primeira
    loop:true,
    //margem lateral entre as imagens
    margin:10,
    //seta de passar carrosel
    nav:true,
    //reposivo, quando diminui ou aumenta tamanho da tela. tela 0 a 600px mostra apenas 1 imagem. 600 a 1000px 3 img. acima de 1000px 5 imgns
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})