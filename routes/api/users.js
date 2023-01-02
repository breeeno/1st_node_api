const express = require("express");
const router = express.Router();
// const uuid = require("uuid");
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
})

module.exports = router