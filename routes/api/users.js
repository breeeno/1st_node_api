const express = require("express");
const router = express.Router();
const uuid = require("uuid");
let users = require("../../data");

//Traz todos os usuários 
router.get("/", (req, res) =>{
    res.json(users); 
});

//Traz apenas um usuário
router.get("/:id", (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))

    if (found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    } else {
        let message = "message: Usuário não encontrado \n status: 404"
        res.status(404).send(message)
    }
});

// cria um usuário
router.post("/", (req, res)=> {
    const newUser = {
        id: uuid.v4(),
        nome: req.body.nome,
        email: req.body.email
    }
    console.log(newUser.nome, newUser.email)
    
    if(!newUser.nome || !newUser.email) {
    message = "message: Dados incompletos \n status: 400"
    return res.status(400).send(message)
}
users.push(newUser)
res.json(users)    
});

// edita um usuário 
router.put("/:id", (req, res) =>{
    const found = users.some(user => user.id === parseInt(req.params.id))
    if (found) {
        const updateUser = req.body;
        users.forEach(user => {
            if(user.id === parseInt(req.params.id)){
                user.name = updateUser.name ? updateUser.name: user.name
                user.email = updateUser.email ? updateUser.email: user.email
                const message = `Usuário atualizado, ${user.name, user.email}.`
                return res.status(200).send(message)
            }
        })

    }
})

// delete um usuário 
router.delete("/:id", (req, res) =>{
    const found = users.some(user => user.id === parseInt(req.params.id))

    if (found) {
        users = users.filter(user => user.id !== parseInt(req.params.id))
        const message = `Usuário deletado. ${users}`
        return res.status(200).send(message)
    } else {
        const error_msg = "Usuário nao encontrado"
        return res.status(404).send(error_msg)
    }
})

module.exports = router