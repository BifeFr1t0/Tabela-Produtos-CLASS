class Produto{
    constructor(nome,marca,precoCusto,precoVenda){
        this.nome = nome;
        this.marca = marca;
        this.precoCusto = precoCusto;
        this.precoVenda = precoVenda;
    }
    calcularLucro(){
        return (this.precoVenda - this.precoCusto)
    }
}

let input_name = document.getElementById('name');
let input_mark = document.getElementById('mark');
let input_costPrice = document.getElementById('costPrice');
let input_sellPrice = document.getElementById('sellPrice');

let output_info = document.getElementById('output');

function Enviar(){
    let name = input_name.value;
    let mark = input_mark.value;
    let costPrice = input_costPrice.value;
    let sellPrice = input_sellPrice.value;

    let produto = new Produto(name,mark,costPrice,sellPrice);

    output_info.innerHTML += `<table>
    <tr>
    <td>Nome</td>
    <td>Marca</td>
    <td>Preço de Custo</td>
    <td>Preço de Venda</td>
    <td>Lucro</td>
    </tr> 
    <tr>
    <td>${produto.nome}</td>
    <td>${produto.marca}</td>
    <td>${produto.precoCusto}</td>
    <td>${produto.precoVenda}</td>
    <td>${produto.calcularLucro()}</td>
    </tr>
    </table>`;
}


