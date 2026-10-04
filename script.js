function gerarCor() {
    let caracteres = "0123456789ABCDEF";
    let cor = "#";

    for (let i = 0; i < 6; i++) {
        let indice = Math.floor(
            Math.random() * caracteres.length
        );

        cor += caracteres[indice];
    }

    return cor;
}

function gerarPaleta() {
    const paleta = document.getElementById("paleta");

    paleta.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        const cor = gerarCor();

        const card = document.createElement("div");

        card.classList.add("card-cor");
        card.style.backgroundColor = cor;

        paleta.appendChild(card);
    }
}

gerarPaleta();
