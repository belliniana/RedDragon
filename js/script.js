const botoesComprar =
    document.querySelectorAll(".comprar-btn");

const listaCarrinho =
    document.getElementById("listaCarrinho");

const totalElement =
    document.getElementById("total");

const contadorCarrinho =
    document.getElementById("contadorCarrinho");


const produtos = {

    "Headset Gamer RGB": 299.90,

    "Mouse RGB": 149.90,

    "Notebook Gamer": 5999.90

};


let total = 0;
let quantidadeItens = 0;


function formatarMoeda(valor) {

    return valor.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}


botoesComprar.forEach(botao => {

    botao.addEventListener("click", () => {

        const nomeProduto =
            botao.dataset.produto;

        const precoProduto =
            produtos[nomeProduto];

        adicionarProduto(
            nomeProduto,
            precoProduto
        );

    });

});


function adicionarProduto(
    nome,
    preco
) {

    const item =
        document.createElement("li");

    item.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
    );

    item.innerHTML = `

        <div>

            <strong>${nome}</strong>

            <br>

            <small>
                ${formatarMoeda(preco)}
            </small>

        </div>

        <button
            class="btn btn-sm btn-outline-danger remover-btn">

            Remover

        </button>

    `;

    listaCarrinho.appendChild(item);

    total += preco;

    quantidadeItens++;

    atualizarCarrinho();

    const botaoRemover =
        item.querySelector(".remover-btn");

    botaoRemover.addEventListener(
        "click",
        () => {

            removerProduto(
                item,
                preco
            );

        }
    );

}


function removerProduto(
    elemento,
    preco
) {

    elemento.remove();

    total -= preco;

    quantidadeItens--;

    atualizarCarrinho();

}


function atualizarCarrinho() {

    totalElement.textContent =
        formatarMoeda(total);

    contadorCarrinho.textContent =
        quantidadeItens;

}


const cards =
    document.querySelectorAll(
        ".product-card"
    );

cards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "translateY(-8px)";

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0)";

        }
    );

});


console.log(
    "RedDragon Store carregada com sucesso."
);