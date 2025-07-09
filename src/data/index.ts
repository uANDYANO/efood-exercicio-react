import type { Restaurant } from '../services/api'

export const RESTAURANTS_DATA: Restaurant[] = [
    {
        id: 1,
        titulo: "La Pizza Mia",
        destacado: true,
        tipo: "Italiana",
        avaliacao: 4.9,
        descricao: "A melhor pizza da cidade com ingredientes frescos e selecionados. Uma experiência autêntica da Itália no conforto da sua casa.",
        capa: "https://dummyimage.com/1024x280/ececec/FFFFFF?text=La+Pizza+Mia",
        cardapio: [
            {
                id: 101,
                foto: "https://dummyimage.com/320x320/FFEBD9/000000?text=Pizza+Marguerita",
                preco: 45.50,
                nome: "Pizza Marguerita",
                descricao: "Molho de tomate, mussarela fresca, manjericão e azeite.",
                porcao: "Serve 2 pessoas"
            },
            {
                id: 102,
                foto: "https://dummyimage.com/320x320/FFEBD9/000000?text=Pizza+Calabresa",
                preco: 52.00,
                nome: "Pizza Calabresa",
                descricao: "Molho de tomate, mussarela, calabresa fatiada e cebola.",
                porcao: "Serve 2 pessoas"
            }
        ]
    },
    {
        id: 2,
        titulo: "Sushi House",
        destacado: false,
        tipo: "Japonesa",
        avaliacao: 4.7,
        descricao: "Tradição e qualidade em pratos da culinária japonesa. Peixes frescos e preparo cuidadoso para uma experiência inesquecível.",
        capa: "https://dummyimage.com/1024x280/1c1c1c/FFFFFF?text=Sushi+House",
        cardapio: [
            {
                id: 201,
                foto: "https://dummyimage.com/320x320/FFEBD9/000000?text=Combinado+Sushi",
                preco: 89.90,
                nome: "Combinado Tradicional",
                descricao: "20 peças variadas selecionadas pelo nosso sushiman.",
                porcao: "Serve 1 pessoa"
            },
            {
                id: 202,
                foto: "https://dummyimage.com/320x320/FFEBD9/000000?text=Hot+Roll",
                preco: 35.00,
                nome: "Hot Roll (8 unidades)",
                descricao: "Sushi empanado e frito com recheio de salmão e cream cheese.",
                porcao: "Serve 1 pessoa"
            }
        ]
    },
    {
        id: 3,
        titulo: "Burger Queen",
        destacado: false,
        tipo: "Hambúrguer",
        avaliacao: 4.8,
        descricao: "Os hambúrgueres mais suculentos e saborosos, feitos com carne 100% Angus e pão artesanal. A realeza do sabor!",
        capa: "https://dummyimage.com/1024x280/F4A261/FFFFFF?text=Burger+Queen",
        cardapio: [
            {
                id: 301,
                foto: "https://dummyimage.com/320x320/FFEBD9/000000?text=Classic+Burger",
                preco: 32.00,
                nome: "Classic Queen Burger",
                descricao: "Pão brioche, hambúrguer de 180g, queijo cheddar, alface, tomate, picles e molho especial da casa.",
                porcao: "Individual"
            },
            {
                id: 302,
                foto: "https://dummyimage.com/320x320/FFEBD9/000000?text=Bacon+Burger",
                preco: 38.50,
                nome: "Double Bacon Bliss",
                descricao: "Pão brioche, dois hambúrgueres de 150g, dobro de queijo, fatias generosas de bacon crocante e maionese de alho.",
                porcao: "Individual"
            },
            {
                id: 303,
                foto: "https://dummyimage.com/320x320/FFEBD9/000000?text=Fritas",
                preco: 15.00,
                nome: "Batatas Rústicas",
                descricao: "Porção de batatas fritas crocantes com alecrim e páprica.",
                porcao: "Serve 2 pessoas"
            }
        ]
    },
    {
        id: 4,
        titulo: "Taco Fiesta",
        destacado: true,
        tipo: "Mexicana",
        avaliacao: 4.6,
        descricao: "Uma explosão de sabores do México! Tacos, burritos e quesadillas feitos com ingredientes frescos e muito tempero.",
        capa: "https://dummyimage.com/1024x280/2A9D8F/FFFFFF?text=Taco+Fiesta",
        cardapio: [
            {
                id: 401,
                foto: "https://dummyimage.com/320x320/FFEBD9/000000?text=Tacos+al+Pastor",
                preco: 28.00,
                nome: "Trio de Tacos al Pastor",
                descricao: "Três tortillas de milho com carne de porco marinada, abacaxi, coentro e cebola.",
                porcao: "Serve 1 pessoa"
            },
            {
                id: 402,
                foto: "https://dummyimage.com/320x320/FFEBD9/000000?text=Burrito+Supremo",
                preco: 35.00,
                nome: "Burrito Supremo",
                descricao: "Grande tortilla de trigo recheada com carne moída, feijão, arroz, queijo, sour cream e guacamole.",
                porcao: "Individual"
            }
        ]
    },
    {
        id: 5,
        titulo: "Salad Fresh",
        destacado: false,
        tipo: "Saudável",
        avaliacao: 4.9,
        descricao: "Alimentação leve, saudável e deliciosa. Monte sua salada ou escolha uma de nossas combinações perfeitas.",
        capa: "https://dummyimage.com/1024x280/84A98C/FFFFFF?text=Salad+Fresh",
        cardapio: [
            {
                id: 501,
                foto: "https://dummyimage.com/320x320/FFEBD9/000000?text=Salada+Caesar",
                preco: 34.00,
                nome: "Salada Caesar com Frango",
                descricao: "Alface romana, tiras de frango grelhado, croutons, queijo parmesão e molho Caesar tradicional.",
                porcao: "Individual"
            },
            {
                id: 502,
                foto: "https://dummyimage.com/320x320/FFEBD9/000000?text=Wrap+de+Atum",
                preco: 29.50,
                nome: "Wrap de Atum Fit",
                descricao: "Pão folha integral, pasta de atum com ricota, cenoura ralada, alface e tomate.",
                porcao: "Individual"
            }
        ]
    },
    {
        id: 6,
        titulo: "Asia Fusion",
        destacado: false,
        tipo: "Asiática",
        avaliacao: 4.7,
        descricao: "Uma viagem pelos sabores da Ásia. Pratos inspirados nas cozinhas tailandesa, chinesa e vietnamita.",
        capa: "https://dummyimage.com/1024x280/D95D39/FFFFFF?text=Asia+Fusion",
        cardapio: [
            {
                id: 601,
                foto: "https://dummyimage.com/320x320/FFEBD9/000000?text=Pad+Thai",
                preco: 42.00,
                nome: "Pad Thai com Camarão",
                descricao: "Talharim de arroz salteado com camarões, broto de feijão, amendoim e molho de tamarindo.",
                porcao: "Individual"
            },
            {
                id: 602,
                foto: "https://dummyimage.com/320x320/FFEBD9/000000?text=Yakisoba",
                preco: 39.00,
                nome: "Yakisoba de Carne e Legumes",
                descricao: "Macarrão oriental com tiras de carne, brócolis, cenoura, acelga e molho à base de shoyu.",
                porcao: "Serve 1 ou 2 pessoas"
            }
        ]
    }
];