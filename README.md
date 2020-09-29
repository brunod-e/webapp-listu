# WebApp: LISTU

A aplicação permite que o usuário cadastre tarefas, marque como concluídas ou exclua.

## Objetivo da aplicação

Facilitar a vida de pessoas muito ocupadas ou com memória fraca, implementando um webapp simples e prático para realização de tarefas cotidianas.

### Como executar a aplicação

Depois de baixar/clonar o repositório, entre no diretório principal e digite

`npm install`

para instalar os pacotes JavaScript utilizados pela aplicação.

Para iniciar o desenvolvimento digite

`npm start`

A partir de então a aplicação estará disponível na porta 5500, definida no arquivo **server.js**. Para acessar, use o navegador e digite o endereço `https://localhost:5500`.

### Em produção

Depois que o código da aplicação está pronto é preciso gerar as versões otimizadas dos arquivos. Para gerar a versão em produção dessa aplicação, no diretório principal digite

`npm run build`

#### Executando a aplicação em produção

Para executar a aplicação em modo produção entre no diretório principal e digite

`node build/app.js`
