cores = document.getElementsByClassName("dinamico")[0];

array = ["#272A36", "#dddddd", "#FF6B00", "#389254", "#BCDCE2", "#FF96B0", "#4C0065", "#A95935"];

array.forEach((e) => {
    let b = document.createElement('input');
    b.type = "button";
    b.style.width = "20px";
    b.style.height = "20px";
    b.style.marginLeft = "3px";
    b.onmouseover = function () {
        
        conteudo = document.getElementsByClassName("conteudo")[0];
        // captura os campos do form e botão
        forms = conteudo.getElementsByTagName("input");
        forms[2].style.backgroundColor = b.style.backgroundColor;

        topBar = document.getElementsByClassName("topBar")[0];
        topBar.style.backgroundColor = b.style.backgroundColor;

        conteudo.style.borderBottomColor = b.style.backgroundColor;

        forms[0].style.borderColor = b.style.backgroundColor;
        forms[1].style.borderColor = b.style.backgroundColor;

    };

    b.style.backgroundColor = e;
    cores.append(b);
});

