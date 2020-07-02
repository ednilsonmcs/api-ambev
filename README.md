# Rotas

### Registro de Usuário
**url**: /autenticacao/registrar
##### Espera um json no seguinte formato:
```json
{
	"nome": "Ednilson",
	"email": "ednilson@gmail.com",
	"senha": "123456"
}
```
##### Validaçes
1. Verifica se o e-mail já sendo utilizado;

### Autenticação de Usuário
**url**: /autenticacao/autenticar

##### Espera um json no seguinte formato:
```json
{
	"email": "didi@gmail.com",
	"senha": "123456"
}
```

##### Em caso de sucesso retorna um json no seguinte formato:
```json
{
  "usuario": {
    "_id": "5efcf51001a79c710d60bd24",
    "nome": "Diego",
    "email": "didi@gmail.com",
    "createdAt": "2020-07-01T20:41:52.422Z",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZmNmNTEwMDFhNzljNzEwZDYwYmQyNCIsImlhdCI6MTU5MzcyMzE2NSwiZXhwIjoxNTkzODA5NTY1fQ.OuRFggPxXwem1aVLjXfXvQmTBOuJvrzUcvlY2JslF3g"
}
```
##### Validaçes
1. A partir do e-mail verifica se o usuário existe, caso não retorna status 400;
2. Verifica se a senha corresponde ao usuário, caso não retorna status 400;
