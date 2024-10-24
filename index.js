const { Evento } = require("./Classes/classeEvento")
const { ModeloCrud } = require("./Classes/classeEvento")

const pessoa1 = new ModeloCrud();
pessoa1.criarEvento(1,"Pedro","24/10","Natal/RN","PaulinhoFreire","900","R$10,50","Ativo")
pessoa1.lerEvento()