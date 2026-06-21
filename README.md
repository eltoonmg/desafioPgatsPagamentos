# Desafio Pgats Pagamentos

Projeto criado para estudo e execução de testes automatizados utilizando Node.js e Mocha.

## Tecnologias utilizadas

- Node.js
- Mocha
- JavaScript
- Visual Studio Code

## Pré-requisitos

Antes de iniciar, é necessário instalar:

- Node.js
- Visual Studio Code

## Configuração do projeto

### 1. Criar a pasta do projeto

Criar uma pasta no diretório desejado, por exemplo:

```txt
C:\Projects\desafioPgatsPagamentos
```

### 2. Inicializar o projeto Node.js

No terminal do VS Code:

```bash
npm init -y
```

### 3. Configurar o package.json

Alterar:

```json
"type": "commonjs"
```

Para:

```json
"type": "module"
```

### 4. Instalar o Mocha

Instalar o framework de testes:

```bash
npm i mocha
```

## Estrutura do projeto

Criar as seguintes pastas:

```txt
src
test
```

## Executando os testes

Para rodar os testes utilizando Mocha:

```bash
npx mocha
```

---

# Configuração do Git

## Inicializar repositório

```bash
git init
```

## Adicionar arquivos

```bash
git add .
```

## Criar commit

```bash
git commit -m "Primeiro commit"
```

## Conectar ao GitHub

```bash
git remote add origin URL_DO_REPOSITORIO
```

## Definir branch principal

```bash
git branch -M main
```

## Enviar projeto para o GitHub

```bash
git push -u origin main
```

---
# Configuração da pipeline

## 🚀 Pipeline de Integração Contínua

Este projeto possui uma pipeline de Integração Contínua (CI) implementada com GitHub Actions para garantir a qualidade da aplicação através da execução automatizada dos testes.

### Funcionalidades da Pipeline

✅ **Execução Manual**

* Permite disparar a execução da pipeline manualmente através do GitHub Actions utilizando o gatilho `workflow_dispatch`.

✅ **Execução Automática por Push**

* Os testes são executados automaticamente após novos commits enviados para a branch principal (`main`).

✅ **Execução Agendada**

* A pipeline também é executada automaticamente em intervalos programados utilizando agendamento via `cron`, garantindo monitoramento contínuo da estabilidade do projeto.

### Validações Realizadas

* Instalação automática das dependências do projeto.
* Execução dos testes automatizados utilizando Mocha.
* Geração de relatórios de execução com Allure Report.

## 📊 Relatório de Execução

O relatório mais recente pode ser acessado em: https://eltoonmg.github.io/desafioPgatsPagamentos/

### Tecnologias Utilizadas

* GitHub Actions
* Node.js
* Mocha
* Allure Report