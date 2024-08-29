const avanca = document.querySellectorAll(".btn-proximo")
avanca.array.forEach(button => {
    button.addEventListener('click' ,function){
        const atual - Document.querySellectorAll('.ativo')
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
        atual.classList.remove('ativo');
        Document.getElementById(proximopasso). classList.add('ativo');
    })
