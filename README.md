# Teste prático Acantomed

## Descrição

API desenvolvida para o processo seletivo da Acantomed. Esta API realiza CRUDs completos de duas entidades: Pacientes e Consultas.
Foi utilizado a biblioteca ExpressJs para a construção do servidor web, Prisma para o mapeamento de objetos relacionais (ORM), PostgreSQL como banco de dados e Swagger para a documentação.

### Pre-requisitos

- Git
- Node
- Npm
- Postgres

### Instalação

1. Clone o projeto

```bash
git clone https://github.com/joaosantosmedeiros/teste-pratico-acantomed.git
```

2. Instale as dependências

```bash
npm install
```

3. Crie uma database no postgres
4. Duplique o arquivo `.env_example` e renomeie o arquivo duplicado para `.env`
5. Siga os passos indicados no arquivo `.env`, alterando os dados conforme suas credenciais do postgres
6. Aplique as migrações do Prisma
```bash
npx prisma migrate dev
```
7. Rode o aplicativo

### Rode o aplicativo

```bash
npm run dev
```

### Documentação

Toda a documentação está presente na rota `http://localhost:5000/docs`.

### Testes

```bash
npm run test
```

### Tecnologias utilizadas

<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" />
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
<img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" />
<img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" />
<img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white" />

### Autores

- **João Pedro dos Santos Medeiros** - Backend Developer - [@joaosantosmedeiros](https://github.com/joaosantosmedeiros)

### Contato

- [LinkedIn](https://www.linkedin.com/in/joao-pedro-dos-santos-medeiros)
- <jopesame@gmail.com>
