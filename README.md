<<<<<<< HEAD
# Cloud SO App

## 1. Introdução

Este projeto apresenta uma aplicação web simples desenvolvida com Node.js e Express.js para a disciplina de Cloud Computing e Sistemas Operacionais. A aplicação utiliza o módulo nativo `os` do Node.js para coletar e exibir informações do sistema operacional onde o processo está sendo executado.

A proposta é observar, por meio de uma aplicação prática, como um programa em execução pode acessar dados do ambiente hospedeiro, tanto em uma máquina local quanto em uma plataforma de nuvem como o Render.

## 2. Objetivo da atividade

O objetivo da atividade é criar uma aplicação web capaz de apresentar informações básicas do sistema operacional, relacionando esses dados com conceitos estudados em Sistemas Operacionais e Computação em Nuvem.

A aplicação exibe:

- Hostname
- Plataforma
- Arquitetura
- Número de CPUs
- Modelo da CPU
- Memória total
- Memória livre
- Tempo de atividade do sistema

## 3. Tecnologias utilizadas

As tecnologias utilizadas neste projeto foram:

- Node.js
- Express.js
- Módulo nativo `os`
- HTML
- CSS
- Render para publicação em nuvem
- GitHub para versionamento do código

Não foram utilizados banco de dados, React, Vite, Next.js, TypeScript, Docker ou frameworks adicionais.

## 4. Instalação das ferramentas

Para executar o projeto localmente, é necessário instalar o Node.js. A instalação do Node.js também inclui o npm, que é o gerenciador de pacotes utilizado para instalar as dependências do projeto.

Após instalar o Node.js, é possível verificar as versões instaladas com os comandos:

```bash
node -v
npm -v
```

Também é recomendado utilizar o Git para versionar o projeto e enviá-lo para o GitHub.

## 5. Criação do projeto

O projeto possui uma estrutura simples, adequada para uma aplicação acadêmica:

```text
cloud-so-app/
├── .gitignore
├── index.js
├── package.json
├── README.md
└── public/
    └── style.css
```

O arquivo `index.js` contém o código principal da aplicação. O arquivo `package.json` define as informações do projeto, o script de inicialização e a dependência do Express. A pasta `public` armazena o arquivo CSS usado para estilizar a página. O arquivo `.gitignore` evita que a pasta `node_modules` seja enviada para o GitHub.

## 6. Desenvolvimento da aplicação

A aplicação foi desenvolvida com Express.js e utiliza CommonJS, com `require`, para importar os módulos necessários.

No arquivo `index.js`, são importados:

```javascript
const express = require("express");
const os = require("os");
```

O Express é usado para criar o servidor web, enquanto o módulo `os` é usado para acessar informações do sistema operacional. A rota principal `GET /` renderiza uma página HTML diretamente pela resposta do servidor.

O projeto também utiliza:

```javascript
process.env.PORT || 3000
```

Essa configuração permite que a aplicação funcione localmente na porta 3000 e também em ambientes de nuvem, como o Render, onde a porta pode ser definida por variável de ambiente.

As funções auxiliares formatam a memória em GB e o tempo de atividade em horas, minutos e segundos, tornando as informações mais compreensíveis para o usuário.

## 7. Execução local

Para executar o projeto localmente, entre na pasta do projeto:

```bash
cd cloud-so-app
```

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm start
```

Depois, acesse no navegador:

```text
http://localhost:3000
```

## 8. Publicação no GitHub

Para publicar o projeto no GitHub, crie um repositório e envie os arquivos com Git.

Exemplo de comandos:

```bash
git init
git add .
git commit -m "Criacao da aplicacao Cloud SO App"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

O GitHub será usado para armazenar o código-fonte e permitir a integração com plataformas de hospedagem em nuvem.

## 9. Publicação no Render

Para publicar a aplicação no Render, siga os passos:

1. Acesse o Render.
2. Crie um novo serviço do tipo Web Service.
3. Conecte o repositório do GitHub.
4. Configure o ambiente como Node.
5. Utilize os comandos abaixo.

Build Command:

```bash
npm install
```

Start Command:

```bash
npm start
```

Após a publicação, o Render fornecerá uma URL pública para acessar a aplicação em nuvem.

## 10. Comparação entre ambiente local e ambiente em nuvem

Ao executar a aplicação localmente e no Render, é possível comparar os dados retornados pelo módulo `os`. Esses dados podem ser diferentes porque a aplicação está sendo executada em ambientes distintos.

| Informação | Ambiente local | Ambiente Render | Observação |
| --- | --- | --- | --- |
| Hostname | Preencher após teste | Preencher após teste | Pode mudar conforme o ambiente |
| Plataforma | Preencher após teste | Preencher após teste | Exemplo: win32 no Windows e linux no Render |
| Arquitetura | Preencher após teste | Preencher após teste | Normalmente x64 |
| Número de CPUs | Preencher após teste | Preencher após teste | Pode variar conforme recursos disponíveis |
| Modelo da CPU | Preencher após teste | Preencher após teste | Pode indicar processador físico ou virtualizado |
| Memória total | Preencher após teste | Preencher após teste | No Render pode representar recursos do contêiner |
| Memória livre | Preencher após teste | Preencher após teste | Varia conforme uso do sistema |
| Uptime | Preencher após teste | Preencher após teste | Representa o tempo de atividade do sistema hospedeiro |

Essa comparação ajuda a compreender a diferença entre executar um processo em uma máquina pessoal e executar o mesmo processo em uma infraestrutura de nuvem.

## 11. Relação com conceitos de Sistemas Operacionais

A aplicação está relacionada a diversos conceitos de Sistemas Operacionais.

O servidor Node.js é executado como um processo. Esse processo recebe requisições HTTP, executa instruções e retorna uma resposta ao navegador. Ao publicar no Render, esse processo passa a ser executado em um ambiente remoto gerenciado pela plataforma.

As informações de CPU mostram características do processamento disponível para o ambiente. O número de CPUs e o modelo ajudam a entender os recursos computacionais que o sistema operacional disponibiliza para a aplicação. Embora esta aplicação não calcule o uso de CPU em tempo real, ela permite discutir como processos dependem da CPU para executar instruções e como o ambiente local ou em nuvem pode oferecer quantidades diferentes de processamento.

As informações de memória demonstram conceitos de gerenciamento de memória. A memória total indica a quantidade disponível no ambiente, enquanto a memória livre mostra quanto ainda está disponível no momento da execução.

O hostname, a plataforma e a arquitetura indicam características do sistema operacional hospedeiro. Localmente, esses dados pertencem ao computador do estudante. Na nuvem, pertencem ao ambiente fornecido pelo Render.

Em ambientes de nuvem, é comum que a aplicação execute sobre infraestrutura virtualizada. Isso significa que os recursos físicos são abstraídos e compartilhados por meio de máquinas virtuais, contêineres ou mecanismos semelhantes.

A computação em nuvem permite executar a aplicação fora da máquina local, disponibilizando acesso pela internet e facilitando implantação, escalabilidade e gerenciamento do serviço. Na execução local, o processo Node.js usa os recursos do computador do estudante. Na execução em nuvem, o mesmo processo usa recursos de um servidor remoto gerenciado pelo Render.

## 12. Conclusão

Este projeto demonstra como uma aplicação Node.js simples pode acessar informações do sistema operacional usando o módulo nativo `os`. A atividade permite relacionar programação web com conceitos fundamentais de Sistemas Operacionais, como processos, CPU, memória, sistema hospedeiro e tempo de atividade.

Além disso, a execução local e a publicação no Render mostram a diferença entre um ambiente pessoal e um ambiente em nuvem. Dessa forma, o projeto contribui para compreender como aplicações modernas são executadas, monitoradas e disponibilizadas em diferentes infraestruturas.
=======
# cloud-so-app
>>>>>>> e8dac20f7d684d7b07f3073bd015886e1ea8bf6a
