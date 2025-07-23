import express from "express"; // importar o express

const server = express(); // definir a variável para receber a função do express
const PORT = 3000; // definir a porta que será usada pelo servidor

server.get("/", (req,res) => { //metodo get
    res.send("Olá Mundo!");
});

server.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}!`);
    console.log(`Acesse em: http://localhost:${PORT}`);
});

// HTTP
// - GET    (Buscar)
// - POST   (Salvar)
// - PUT    (Editar)
// - DELETE (Apagar)

// HTTP status
// - 200 Sucesso
// - 201 Salvo com sucesso
// - 400 Requisição Inválido
// - 401 Não autorizado 
// - 404 Não encontrado
// - 500 Erro no servidor