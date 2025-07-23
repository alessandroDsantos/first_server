import express from "express"; 
import app from "../firebase/app.js"
import { getFirestore } from "firebase-admin/firestore"


const usuariosRouter = express.Router();
const db = getFirestore(app);

usuariosRouter.get("/usuarios", async (req, res) => { //metodo get
    const docs = await db.collection("usuarios").get();
    const usuarios = [];
    docs.forEach(doc => {
        usuarios.push({ ...doc.data(), id: doc.id});
    })
    
    return res.status(200).json(usuarios);
});

usuariosRouter.get("/usuarios/:id", async (req, res) => {
    const id = req.params.id; 
    const doc = await db.collection("usuarios").doc(id).get();
    const usuario = doc.data();

    if(usuario){
        return res.status(200).json(usuario);
    } else {
        return res.status(404).json({ msg: "Produto não encontrado." });
    }
})

usuariosRouter.post("/usuarios", async (req, res) => {
    const usuario = req.body;
    await db.collection("usuarios").add(usuario);
    return res.status(201).json({ msg: "Usuário cadastrado!"});
})

export default usuariosRouter;