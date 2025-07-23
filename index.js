import express from "express"; // importar o express

const server = express(); // definir a variável para receber a função do express
server.use(express.json()); // para poder receber os arquivos já convertidos em json


const PORT = 3000; // definir a porta que será usada pelo servidor

const usuarios = [
    {
        name: "Pedro",
        email: "pedro@email.com",
        idade: 23
    },
    {
        name: "Mateus",
        email: "mateus@email.com",
        idade: 30
    },
    {
        name: "Ana",
        email: "ana@email.com",
        idade: 25
    }
]

server.get("/usuarios", (req, res) => { //metodo get
    res.status(200).json(usuarios);
});

server.get("/usuarios/:id", (req, res) => {
    const id = Number(req.params.id); 
    
    const usuario = usuarios[id - 1];

    if(usuario){
        return res.status(200).json(usuario);
    } else {
        return res.status(404).json({ msg: "Produto não encontrado." });
    }
})

server.post("/usuarios", (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario);
    return res.status(201).json({ msg: "Usuário cadastrado!"});
})

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