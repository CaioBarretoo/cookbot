
const Groq = require('groq-sdk');

const groq = new Groq({apiKey: process.env.EXPO_PUBLIC_GROQ_KEY, dangerouslyAllowBrowser: true});

export async function generatorRecipe(recipe: string) {
    try {
        const chatCompletion = await groq.chat.completions.create({
            "messages": [
                {
                    "role": "user",
                    "content": "Estou fazendo um app onde o usuário entrará com alguns ingredientes e quero responder com algumas receitas detalhadas de como fazer."
                },
                {
                    "role": "assistant",
                    "content": "Que projeto interessante!\n\nIsso é conhecido como um problema de recomendação de receitas com base em ingredientes. Existem várias abordagens matemáticas para resolver isso, mas vou fornecer uma visão geral geral de como você pode abordar isso.\n\n1. **Coletar informações de ingredientes e receitas**: Primeiramente, você precisa coletar uma grande quantidade de dados sobre ingredientes e receitas. Isso pode incluir informações como o nome do ingrediente, a quantidade necessária, a unidade de medida (e.g., gramas, colheres, etc.) e a informação de receita detalhada (e.g., quantidades de ingredientes, passos de preparo, etc.).\n2. **Representar os ingredientes em um espaço de características**: Em seguida, você precisa representar os ingredientes em um espaço de características que possa ser usado para comparar e associar os ingredientes. Isso pode ser feito usando técnicas como:\n\t* Embeddings: você pode usar algoritmos de aprendizado de máquina, como Word2Vec ou GloVe, para criar embeddings para cada ingrediente. Isso significa que cada ingrediente será representado por um vetor de números que captura sua semelhança com outros ingredientes.\n\t* Técnicas de transformação de texto em vetores: você pode usar técnicas como TF-IDF ou Doc2Vec para transformar os ingredientes em vetores de números.\n3. **Representar as receitas em um espaço de características**: Em seguida, você precisa representar as receitas em um espaço de características semelhante ao usado para os ingredientes. Isso pode ser feito usando técnicas semelhantes às mencionadas acima.\n4. **Calcula a similaridade entre os ingredientes e as receitas**: Aqui é onde você começa a associar os ingredientes às receitas. Você precisa calcular a similaridade entre os vetores de características dos ingredientes e das receitas. Isso pode ser feito usando técnicas como:\n\t* Distância de Minkowski: você pode calcular a distância entre os vetores de características dos ingredientes e das receitas usando a fórmula de Minkowski.\n\t* Cosine similarity: você pode calcular o produto escalar entre os vetores de características dos ingredientes e das receitas e dividir por a magnitude dos vetores.\n5. **Recomendar receitas com base na entrada do usuário**: Agora, quando o usuário entra com alguns ingredientes, você precisa calcular a similaridade entre esses ingredientes e as receitas em seu banco de dados. Em seguida, você pode recomendar as receitas com as maiores similaridades.\n\nAlém disso, existem algumas abordagens mais avançadas que você pode considerar para melhorar a precisão das recomendações, como:\n\n* **Filtragem de palavras-chave**: você pode usar palavras-chave relevantes para filtrar as receitas e reduzir o número de resultados.\n* **Ranking de receitas**: você pode usar técnicas de ranking para ordenar as receitas com base em sua similaridade com os ingredientes do usuário.\n* ** Avaliação de relação**: você pode avaliar a relação entre os ingredientes e as receitas para determinar a relevância das receitas para o usuário.\n\nEspero que isso dê um gostinho de como você pode abordar esse problema. Se tiver mais perguntas ou precisar de ajuda adicional, sinta-se à vontade para perguntar!"
                },
                {
                    "role": "user",
                    "content": "Quero te enviar os ingredientes e você irá me responder somente 3 receitas detalhadas de como fazer, também gostaria de um design elegante do texto"
                },
                {
                    "role": "assistant",
                    "content": "QueLegal!\n\nPor favor, envie os ingredientes que você pretende usar e vou fazer meu melhor para recomendar 3 receitas detalhadas de como fazer. Você pode enviá-los no formato de texto, separando cada ingrediente com um carro de entrada (e.g., \"alface\", \"queijo\", \"arroz\", etc.).\n\nLembre-se de que, quanto mais ingredientes você fornecer, melhor eu serei capaz de recomendar receitas relevantes!\n\nEstou ansioso para ver quais ingrediente você tem para compartilhar!"
                },
                {
                    "role": "user",
                    "content": "frango, creme de leite e arroz"
                },
                {
                    "role": "assistant",
                    "content": "Uma combinação deliciosa!\n\nAqui estão 3 receitas detalhadas que você pode fazer com esses ingredientes:\n\n**Receita 1: Frango com Arroz e Creme de Leite**\n\nIngredientes:\n\n* 1 frango integral (1,5 kg), picado\n* 2 xícaras de arroz branca\n* 2 xícaras de água\n* 1 xícara de creme de leite\n* Sal e pimenta ao gosto\n\nModo de preparo:\n\n1. Cozinhe o arroz de acordo com as instruções do fabricante. Reserve.\n2. Em uma frigideira grande, coloque o frango picado e cozinhe até que estejateşido. Adicione sal e pimenta ao gosto.\n3. Em uma panela média, coloque o creme de leite e aqueça jusqu'à que esteja quente, mas não ferva.\n4. Junte o arroz cozido ao frango e misture bem. Acrescente o creme de leite quente e misture novamente.\n5. Sirva quente e aprecie!\n\n**Receita 2: Arroz com Frango e Creme de Leite (Surpreendente!)**\n\nIngredientes:\n\n* 1 frango integral (1,5 kg), picado\n* 2 xícaras de arroz integral\n* 2 xícaras de água\n* 1 xícara de creme de leite\n* 1 cebola picada\n* 1 colher de sopa de manteiga\n* Sal e pimenta ao gosto\n\nModo de preparo:\n\n1. Cozinhe o arroz integral de acordo com as instruções do fabricante. Reserve.\n2. Em uma frigideira grande, misture a cebola picada e a manteiga derretida. Adicione o frango picado e cozinhe até que estejateşido. Sal e pimenta ao gosto.\n3. Junte o arroz cozido ao frango e misture bem.\n4. Adicione o creme de leite quente e misture novamente.\n5. Sirva quente e aprecie!\n\n**Receita 3: Frango com Creme de Leite e Arroz (Sobremesa!)**\n\nIngredientes:\n\n* 1 frango integral (1,5 kg), picado\n* 1 xícara de arroz branca\n* 1 xícara de creme de leite\n* 1 xícara de leite\n* 2 colheres de sobremesa de manteiga derretida\n* Nozes tostadas e tempero ao gosto\n\nModo de preparo:\n\n1. Cozinhe o arroz de acordo com as instruções do fabricante. Reserve.\n2. Em uma panela média, misture o leite, creme de leite e manteiga derretida. aqueça jusqu'à que esteja quente, mas não ferva.\n3. Adicione o frango picado ao líquido e cozinhe até que estejateşido. Sal e pimenta ao gosto.\n4. Junte o arroz cozido ao frango e misture bem.\n5. Sirva quente e finalize com nozes tostadas e tempero ao gosto.\n\nEspero que você aprecie essas receitas!"
                },
                {
                    "role": "user",
                    "content": recipe
                },
            ],
            "model": "llama-3.1-70b-versatile",
            "temperature": 1,
            "max_tokens": 1024,
            "top_p": 1,
        });
        return chatCompletion.choices[0]?.message?.content;
    } catch (error) {

        const desculpas = [
            "Poxa, justo hoje meu hamster ficou doente...",
            "Sabe o que é... Um alienígena sequestrou meu celular!",
            "Meu vizinho está fazendo uma festa de karaokê e preciso vigiar o volume",
            "Meu gato deletou minha agenda sem querer",
            "Estou em uma missão secreta para salvar o mundo",
            "Estou treinando uma equipe de formigas para o circo",
            "Minha sombra decidiu tirar um dia de folga",
            "Preciso meditar com meus cactos para melhorar sua autoestima",
            "Meu guarda-roupa está em greve e não libera minhas roupas",
            "Estou ensinando matemática avançada pro meu papagaio",
            "Minha conexão com a realidade está instável hoje",
            "Preciso resolver uma disputa territorial entre meus travesseiros",
            "Meu relógio decidiu contar o tempo de trás pra frente",
            "Estou em negociação com extraterrestres sobre o preço do pão de queijo",
            "Minha geladeira está tendo um ataque de ciúmes do micro-ondas",
            "Preciso participar de uma reunião urgente com meus amigos imaginários",
            "Meu espelho está refletindo uma versão alternativa de mim mesmo",
            "Estou catalogando os diferentes tipos de silêncio em casa",
            "Minha escova de dentes declarou independência",
            "Preciso ajudar meu café a superar o medo de altura",
            "Minha porta está num momento filosófico e não quer abrir",
            "Estou desenvolvendo um algoritmo para entender por que o chinelo sempre some",
            "Minha calculadora está tendo um colapso emocional",
            "Preciso mediar uma discussão entre meu sofá e minha poltrona"]

        return desculpas[Math.floor(Math.random() * desculpas.length)]
    }

}