# APP DE CLIMA

Esse é um aplicativo que consome uma API da Open Weather. O propósito dessa aplicação web é justamente mostrar como trabalhar com a API. Foi Utilizado o Ícone do Font Awesome via CDN.<br></br>

## ADICIONANDO FONTES DO GOOGLE
Foram utilizadas as fontes do Google pelo fato de transmitir um estilo mais clássico e formal, o que torna agradável em um APP de Clima.<br></br>

```<link rel="preconnect" href="https://fonts.googleapis.com">```<br></br>
```<link href="https://fonts.googleapis.com/css2?family=Arsenal:ital,wght@0,400;0,700;1,400;1,700&family=Cormorant:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">```<br></br>

# PROTOTIPAGEM

O Protótipo foi feito a parte de mobile pelo Figma, a intenção é mostrar que eu realmente sei fazer e que estou aprendendo e evoluindo. Podemos ter várias fontes, mas eu não quero ser só mais um que copia código, e que pega um design pronto, mas que faz algo do zero. Então, vai ser um pouco diferente. O que pretendo fazer ali é a API do Clima, como um projeto que consome uma API no Front End. No final a conclusão de tudo vai ser sobre pesquisas que fiz e etc. Lembrando também a vocês que o protótipo que estou usando é um protótipo de média fidelidade, mas já auxilia no desenvolvimento e deixa mais claro. Segue o Link do Protótipo Abaixo 👇👇👇<br></br>

[PROTÓTIPO NO MOBILE!!!](https://www.figma.com/design/9C8fSO5DOLObRP3m0jXmoD/App-Weather?node-id=0-1&t=dGTIngW6ILaNrK95-1)<br></br>
[PROTÓTIPO NO TABLET!!!](https://www.figma.com/design/9C8fSO5DOLObRP3m0jXmoD/App-Weather?node-id=21-2&t=zy2Vjs6eiUMSctCW-1)<br></br>
[PROTÓTIPO NO DESKTOP!!!](https://www.figma.com/design/9C8fSO5DOLObRP3m0jXmoD/App-Weather?node-id=21-94&t=zy2Vjs6eiUMSctCW-1)<br></br>

## PSICOLOGIA DAS CORES
**60% (Azul-Claro) | #007EA7 ->** Essa é uma cor que reflete a cor do céu claro. É muito comum em uma Aplicação que mede o Clima, pois já tem a associação ao tempo, se está azul, significa tempo firme. Porém se for cinza indica Tempo Nublado. Também é utilizada nos Botões de Ação<br></br>
**30% (Branco) | #F4F3EE ->** Essa cor foi usada no container, pois transmite um bom contraste e facilita a leitura, sendo o padrão para a cor de fundo.<br></br>
**10% (Preto) | #020402 ->** Essa cor serve para dar o contraste do fundo, sendo usada apenas no input e no texto.<br></br>

## MOBILE FIRST
Foi usado o conceito de Mobile First. Hoje em dia temos 90% dos dispositivos são celulares, por isso devemos nos preocupar primeiro com ele. A Probablilidade de alguém usar o celular é gigantesca, por isso a importância da Responsividade nos Dispositivos Móveis.<br></br>

# MEDIA QUERY
Apliquei o conceito de Media Query para melhorar a responsividade. Como foi dito, o Celular é o mais utilizado. Porém, como sempre, devemos aplicar também para os dispositivos maiores, melhorando a Experiência do Usuário em relação a Interface. Coloquei alguns breakpoints, para Celular, Tablet, Desktop, Full HD e telas de 2.5k, que é a tela de alguns IMac. Eu não coloquei o breakpoint de 4k até porque são monitores para jogos, então o publico-alvo é diferente, e o IMac com telas de 4k são equipamentos de custo mais elevado, é dificil alguem ter e corresponde a uma parcela muito pequena de usuários, resolvi deixar mais generalizado até para o código ficar mais leve e mais fácil de dar manutenção no futuro.<br></br>

# JAVASCRIPT
Vamos a Explicação do Código JavaScript. Temos dois arquivos, o script.js e o weather.js, o que o script.js faz é justamente adicionar um evento de clique, evita o padrão do formulário com o event preventDefault. Depois ele armazena a cidade em uma memória local para utilizar em outra página. Caso a cidade esteja vazia, ele exibe um alert dizendo para digitar uma cidade em vermelho, pra chamar a atenção mesmo. Já o weather.js tem toda a lógica da API. Ela captura o valor armazenado na memória local e dentro dela temos uma função assíncrona, para esperar a API carregar e depois manipular os resultados. Todas as variáveis são armazenadas e com elas chamo a API Key e a API URL. Se o código for igual a 200 ele manipula os dados da API e mostra na tela os dados coletados, que são, como está o Céu, Temperatura Atual, Temperatura Máxima, Temperatura Mínima, Umidade do Ar e a Velocidade do vento. Caso clique no botão de Nova Consulta ele leva para a página anterior, e assim basta colocar a cidade.<br></br>

# LINK DO PROJETO
[Segue o Link do Projeto!!!](https://paulo19961944.github.io/Weather-App/)
