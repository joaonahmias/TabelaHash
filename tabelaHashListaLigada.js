import ListaLigada from "./listaLigada";

//abstrair

class Registro{

    constructor(chave,dado){
        this.chave=chave
        this.dado=dado
    }


}

class TabelaHashListaLigada{
    constructor(){
        this.tabela = []
    }

    funcaoHash(chave){
        let somaChave=0
        let i
        for(i=0;i<chave.length;i++){
            somaChave+= chave.CharCodeAt(i)*31
        }
        return somaChave%17
    }

    add(chave,dado){
        let novoRegistro = new Registro(chave,dado)
        let indice = this.funcaoHash(chave)
        
        if(this.tabela[indice]===null||this.tabela[indice]===undefined){
            this.tabela[indice]=new ListaLigada()
        }

        if(this.tabela[indice].search(chave)!=undefined){
            this.tabela[indice].remove(chave)
        }

        this.tabela[indice].append(novoRegistro)
    }

    remove(chave){
        let indice = this.funcaoHash(chave)
        
        if(this.tabela[indice]===null||this.tabela[indice]===undefined){
            return "elemento não encontrado"
        }

        if(this.tabela[indice].search(chave)!=undefined){
            this.tabela[indice].remove(chave)
        }
    }

    get(chave){
        let indice = this.funcaoHash(chave)
        
        if(this.tabela[indice]===null||this.tabela[indice]===undefined){
            return "elemento não encontrado"
        }

        return this.tabela[indice].search(chave)
        
    }
}

export default TabelaHashListaLigada