class Registro{
	constructor(chave,dado){
	this.chave = chave
	this.dado = dado
	}
}

class TabelaHash{
	constructor(){
		this.tabela = []
		this.size=20
	}

	funcaoHash(registro){
		let somaChave=0
		let i
		for(i=0;i<registro.length;i++){
			somaChave+= registro.charCodeAt(i)*31
		}

		return somaChave%20
	}

	isFull(){
		let i
		let cont=0
		for(i=0;i<this.tabela.length;i++){
			if(this.tabela[i]!=null&&this.tabela[i]!=undefined){
				cont++
			}
		}
		if(cont===this.size){
			return true
		}

		return false
	}
	
	add(chave,dado){
		let novoRegistro = new Registro(chave,dado)
		let indice = this.funcaoHash(novoRegistro.chave)

		if(this.isFull()){
			return "Tabela Cheia"
		}
		while(this.tabela[indice]!=null&&this.tabela[indice]!=undefined){
			if(this.tabela[indice].chave===novoRegistro.chave){
				break
			}
			indice++
			indice=indice%this.size
			
		}

		this.tabela[indice]=novoRegistro
	}

	remove(chave){
		let indice = this.funcaoHash(chave)
		while(this.tabela[indice]!=null&&this.tabela[indice]!=undefined){

			if(this.tabela[indice].chave===chave){
				this.tabela[indice]=null
				return true
			}

			indice++
			indice=indice%this.size



		}

		return false
	}

	get(chave){

		let indice = this.funcaoHash(chave)

		while(this.tabela[indice]!=null&&this.tabela[indice]!=undefined){

			if(this.tabela[indice].chave===chave){
				return this.tabela[indice].dado
			}

			indice++
			indice=indice%this.size


			
		}

		return undefined
	}
}

export default TabelaHash