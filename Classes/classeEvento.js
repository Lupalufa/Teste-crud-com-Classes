class Evento {
    constructor(id,nome,data,localizacao,organizador,maxParticipantes,precoIngressos,status){
        this.id = id
        this.nome = nome
        this.data = data
        this.localizacao = localizacao
        this.organizador = organizador
        this.maxParticipantes = maxParticipantes
        this.precoIngressos = precoIngressos
        this.status = status
}
}

class ModeloCrud {
    constructor() {
        this.eventos = []
    }
    criarEvento(id,nome,data,localizacao,organizador,maxParticipantes,precoIngressos,status){
        const novoEvento = {
            id,
            nome,
            data,
            localizacao,
            organizador,
            maxParticipantes,
            precoIngressos,
            status,
        }
        try {
            this.eventos.push(novoEvento)
        } catch (error) {
            console.error("Erro ao cadastrar dados",error.message);   
        }
    }
    editarEvento(id,novoNome,novaData,Novalocalizacao,novoOrganizador,novoMaxParticipantes,novoprecoIngresso,novoStatus){
        try {
            const evento = this.eventos.find(evento =>
                this.eventos.id === id
            )
            if(evento){
                evento.nome = novoNome,
                evento.data = novaData
                evento.localizacao = Novalocalizacao
                evento.organizador = novoOrganizador
                evento.maxParticipantes = novoMaxParticipantes
                evento.precoIngressos = novoprecoIngresso
                evento.novoStatus = novoStatus
                console.log("Editado com sucesso")
            }
            else{
                console.log("Não foi possível editar o evento")
            }
        } catch (error) {
            console.error("Erro ao editar dados",error.message);
        }
    }
    lerEvento(){
        try {
            console.table(this.eventos)
        } catch (error) {
            console.error("Erro ao ler os dados",error.message);
        }
    }
    excluirEvento(id){
        try {
            const indice = this.eventos.findIndex(indice =>
                indice.id === id
            )
            if(indice === -1){
               console.log("O Evento não foi encontrado ou não existe")
            }
            else {
                this.eventos.splice(indice,1)
                console.log("O evento foi apagado com sucesso")
            }
        } catch (error) {
            console.error("Erro ao apagar os dados",error.message);
        }
    }
    getNome(){
        return this.nome
    }
    getData(){
        return this.data
    }
    getLocalizacao(){
        return this.localizacao
    }
    getOrganizacao(){
        return this.organizador
    }
    getMaxParticipantes(){
        return this.maxParticipantes
    }
    getPrecoIngressos(){
        return this.precoIngressos
    }
    getStatus(){
        return this.status
    }

    exibirDados(){
        this.lerEvento()
    }
}

module.exports = { ModeloCrud, Evento }
