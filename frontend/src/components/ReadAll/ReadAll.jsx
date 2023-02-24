import "./ReadAll.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

// Mock Items (exatamente a mesma estrutura que o back traria)
// Isso facilita o trabalho aqui no Front, para conseguir estruturar
// comportamento, sem precisar depender do back para receber dados

const itemsMock = [
    {
        _id: "63e656f4a1a0dd01ea970ee9",
        nome: "Gabriel Barbosa",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgrH8bFrIqjLStBEpx34G4jO6SBiIKnfN2eLvIxw8lNA&s",
        tags: ["Posição: Artilheiro", "Gols: 150", "Número: 10"],
    },
    {
        _id: "63efa43f59f36d6462053882",
        nome: "Bruno Henrique",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAYc1JEM7_0ojipB8vZuDcn25Bo7ysH8K8AWa6G5fyXYVgKTVGtnI_V-0iV02pjWBNpJw&usqp=CAU",
    },
    {
        _id: "63efa50659f36d6462053883",
        nome: "Pedro",
        imageUrl: "https://s2.glbimg.com/B00eYh4ES3rm7bvelgBAuxwYkK4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/r/G/jNEx1CQomqICu6sXlPhg/81-2-.jpg",
    },
    {
        _id: "63efa5c959f36d6462053884",
        nome: "Arrascaeta",
        imageUrl: "https://colunadofla.com/wp-content/uploads/2023/01/arrascaeta-comemora-gol-flamengo-x-santos-maracana-brasileirao.jpg",
    },
    {
        _id: "63efa65459f36d6462053885",
        nome: "Everton Ribeiro",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RehWDu7zpxvs577C7gvLLlUeJ81Zti-paP6cEYsLaSWb1Lw7kofqkv6L4PngrhB_ZHQ&usqp=CAU",
    },
];

/*
- Para cada item da lista, exibe um card do Rick Sanchez
- Pegar a informação de cada item e enviar para o componente <Card />
- A informação recebida no card deve ser exibida no console.log
- Pegar cada parte da informação recebida e colocá-la nos elementos de HTML
*/

// Sintaxe de concatenação de variáveis dentro do JSX, chaves: {}
// { VARIAVEL }
// Concatenar = unir de forma lógica

// Na verdade, as chaves representam que código JavaScript pode ser
// inserido dentro delas

function ReadAll() {
    // useState retorna 2 coisas:
    // 1: o valor do estado
    // 2: a função que atualiza o valor do estado
    //  const estadoItems = useState([]);
    //  const items = estadoItems([0]);
    //  const setItems = estadoItems([1]);
    const [items, setItems] = useState([]);

    // Realizar requisição para backend obtendo a lista de itens
    async function realizarRequisicao() {
        //const url = "http://localhost:3000/item";
        const url = "https://ocean-jornada-fullstack-3fxl.onrender.com/item";
        const response = await fetch(url);
        const data = await response.json();

        setItems(data);
    }

    // UseEffect
    // 1: uma função que será executada
    // 2: uma lista de dependências
    useEffect(function () {
        realizarRequisicao();
    }, []);

    return <div className="ReadAll">
        {items.map(function (item) {
            //console.log(item);
            //Key -> card-1234
            return <Card key={'card-' + item._id} item={item} />;
        })}
    </div>
}

export default ReadAll;