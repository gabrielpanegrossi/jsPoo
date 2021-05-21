//UTILITARIOS
const exibeMensageTexto = (funcao) => (texto) => funcao(texto);
const exibeMensagemSucesso = exibeMensageTexto(console.log);
const exibeMensagemFalha = exibeMensageTexto(console.log);
const buscaPorCpf = (cpf) => (funcionario) => funcionario.cpf == cpf;

class Funcionario {
	constructor(nome, dataAdmissao, dataNascimento, setor, funcao, custo, cpf) {
		this._nome = nome;
		this._dataAdmissao = dataAdmissao;
		this._dataNascimento = dataNascimento;
		this._setor = setor;
		this._funcao = funcao;

		let _cpf = cpf;

		let _custo = custo;

		this.getCpf = () => {
			return _cpf;
		};

		this.getCusto = () => {
			return _custo;
		};
		this.setCusto = (novoCusto) => {
			_custo = novoCusto;
		};
	}
	//getters
	get custo() {
		return this.getCusto();
	}

	get cpf() {
		return this.getCpf();
	}

	get nome() {
		return this._nome;
	}

	get dataAdmissao() {
		return this._dataAdmissao;
	}

	get dataNascimento() {
		return this._dataNascimento;
	}

	get setor() {
		return this.setor;
	}

	get funcao() {
		return this._funcao;
	}

	//setters
	set custo(novoCusto) {
		this.setCusto(novoCusto);
	}
	set nome(novoNome) {
		this._nome = novoNome;
	}
	set dataNascimento(novoNascimento) {
		this._dataNascimento = novoNascimento;
	}
	set dataAdmissao(novaAdmissao) {
		this._dataAdmissao = novaAdmissao;
	}
	set setor(novoSetor) {
		this._setor = novoSetor;
	}
	set funcao(novaFuncao) {
		this._funcao = novaFuncao;
	}

	calcularCusto() {
		exibeMensagemSucesso(`O Custo mensal do funcionário é de ${this.custo}`);
		return this.custo;
	}
}

//FUNCIONARIO INTERNO (2 NIVEL DE CLASSES)
class FuncionarioInterno extends Funcionario {
	constructor(
		nome,
		dataAdmissao,
		dataNascimento,
		setor,
		funcao,
		custo,
		cpf,
		regimeContrato
	) {
		super(nome, dataAdmissao, dataNascimento, setor, funcao, custo, cpf);
		this._regimeContrato = regimeContrato;
	}

	get regimeContrato() {
		return this._regimeContrato;
	}

	set regimeContrato(novoRegime) {
		this._regimeContrato = novoRegime;
	}
	aumentarCusto(valor) {
		this.custo += valor;

		exibeMensagemSucesso(`o Novo valor do funcionário é de ${this.custo}`);
	}
}

//3 NIVEL DE CLASSES
class Estagiario extends FuncionarioInterno {
	constructor(
		nome,
		dataAdmissao,
		dataNascimento,
		setor,
		funcao,
		custo,
		cpf,
		regimeContrato,
		universidade
	) {
		super(
			nome,
			dataAdmissao,
			dataNascimento,
			setor,
			funcao,
			custo,
			cpf,
			regimeContrato
		);
		this._universidade = universidade;
	}

	get universidade() {
		return this._universidade;
	}

	set universidade(novaUniversidade) {
		this._universidade = novaUniversidade;
	}
}

class Contratada extends FuncionarioInterno {
	constructor(
		nome,
		dataAdmissao,
		dataNascimento,
		setor,
		funcao,
		custo,
		cpf,
		regimeContrato,
		login,
		senha
	) {
		super(
			nome,
			dataAdmissao,
			dataNascimento,
			setor,
			funcao,
			custo,
			cpf,
			regimeContrato
		);
		this._login = login;
		let _senha = senha;

		this.logar = (usuario, senhaDigitada) => {
			if (this._login == usuario && _senha == senhaDigitada) {
				console.log(`Bem vindo ${usuario}`);
			} else {
				console.log("Usuário ou senha inválidos!");
			}
		};

		this.setSenha = (novaSenha) => {
			_senha = novaSenha;
		};
	}

	alteraSenha(novaSenha) {
		this.setSenha(novaSenha);
	}

	logar(usuario, senha) {
		this.logar(usuario, senha);
	}
}

class Vendedor extends FuncionarioInterno {
	constructor(
		nome,
		dataAdmissao,
		dataNascimento,
		setor,
		funcao,
		custo,
		cpf,
		regimeContrato,
		vendas,
		quantidade,
		comissao
	) {
		super(
			nome,
			dataAdmissao,
			dataNascimento,
			setor,
			funcao,
			custo,
			cpf,
			regimeContrato
		);
		this._vendas = vendas;
		this._quantidade = quantidade;
		this._comissao = comissao;
	}
	get vendas() {
		return this._vendas;
	}
	get quantidade() {
		return this._quantidade;
	}
	get comissao() {
		return this._comissao;
	}
	set vendas(atualizaVenda) {
		this._vendas = atualizaVenda;
	}
	set quantidade(atualizaQuantidade) {
		this._quantidade = atualizaQuantidade;
	}

	set comissao(atualizaComissao) {
		this._comissao = atualizaComissao;
	}

	efetuarVenda(valor) {
		this.quantidade++;
		this.vendas += valor;
	}

	calculaCusto() {
		let custoTotal = this.custo + this.comissao * this.vendas;
		exibeMensagemSucesso(`O custo total é de ${custoTotal}`);
	}
}

//let vendedor = new Contratada('nome', 'dataAdmissao', 'dataNascimento', 'setor', 'funcao', 1000, 'cpf', 'regimeContrato','felipe', '123')

//FUNCIONARIO EXTERNO (2 NIVEL DE CLASSES)
class FuncionarioExterno extends Funcionario {
	constructor(
		nome,
		dataAdmissao,
		dataNascimento,
		setor,
		funcao,
		custo,
		cpf,
		tempoDeContrato
	) {
		super(nome, dataAdmissao, dataNascimento, setor, funcao, custo, cpf);
		this._tempoDeContrato = tempoDeContrato;
	}
	get tempoDeContrato() {
		return this._tempoDeContrato;
	}
	set tempoDeContrato(novoTempoContrato) {
		this._tempoDeContrato = novoTempoContrato;
	}
}

//(3 NIVEL DE CLASSES)
class Terceirizado extends FuncionarioExterno {
	constructor(
		nome,
		dataAdmissao,
		dataNascimento,
		setor,
		funcao,
		custo,
		cpf,
		tempoDeContrato,
		nomeDaEmpresa,
		treinamento
	) {
		super(
			nome,
			dataAdmissao,
			dataNascimento,
			setor,
			funcao,
			custo,
			cpf,
			tempoDeContrato
		);
		this._nomeDaEmpresa = nomeDaEmpresa;
		this._treinamento = treinamento;
	}

	get nomeDaEmpresa() {
		return this._nomeDaEmpresa;
	}

	get treinamento() {
		return this.treinamento;
	}

	set nomeDaEmpresa(novoNome) {
		this._nomeDaEmpresa = novoNome;
	}

	set treinamento(value) {
		this._treinamento = value;
	}

	calculaCusto() {
		let custoTotal = this.custo * this.tempoDeContrato;
		exibeMensagemSucesso(`O custo total é de ${custoTotal}`);
	}
}

class Voluntario extends FuncionarioExterno {
	constructor(
		nome,
		dataAdmissao,
		dataNascimento,
		setor,
		funcao,
		custo,
		cpf,
		tempoDeContrato,
		horasTrabalho,
		refeicaoInclusa
	) {
		super(
			nome,
			dataAdmissao,
			dataNascimento,
			setor,
			funcao,
			custo,
			cpf,
			tempoDeContrato
		);
		this._horasTrabalho = horasTrabalho;
		this._refeicaoInclusa = refeicaoInclusa;
	}
	get horasTrabalho() {
		return this._horasTrabalho;
	}
	get refeicaoInclusa() {
		return this._refeicaoInclusa;
	}
	set horasTrabalho(novaHora) {
		this._horasTrabalho = novaHora;
	}
	set refeicaoInclusa(valor) {
		this._refeicaoInclusa = valor;
	}
}

//LISTA FUNCIONARIOS
class ListaFuncionarios {
	constructor() {
		this._funcionarios = [];
	}

	get funcionarios() {
		return this._funcionarios;
	}

	set funcionarios(novoFuncionario) {
		this._funcionarios = novoFuncionario;
	}

	adicionaFuncionario(funcionario) {
		this.funcionarios.push(funcionario);
	}

	removerFuncionario(cpf) {
		const indice = this.funcionarios.findIndex(buscaPorCpf(cpf));
		if (indice > -1) {
			const nomeFuncionario = this.funcionarios[indice].nome;
			exibeMensagemSucesso(
				`o funcionário ${nomeFuncionario} foi removido da sua lista!`
			);
			this.funcionarios.splice(indice, 1);
		} else {
			exibeMensagemFalha("Funcinário não encontrado");
		}
	}

	buscarFuncionario(cpf) {
		const indice = this.funcionarios.findIndex(buscaPorCpf(cpf));
		exibeMensagemSucesso(this.funcionarios[indice]);
		return this.funcionarios[indice];
	}

	imprimeFuncionarios() {
		console.log(this.funcionarios);
	}

	efetivarEstagiario(cpf, tipo) {
		const estagiario = this.buscarFuncionario(cpf);
		if (tipo) {
			this._funcionarios.push(
				new Contratada(
					estagiario._nome,
					estagiario._dataAdmissao,
					estagiario._dataNascimento,
					estagiario._setor,
					estagiario._funcao,
					estagiario._custo,
					estagiario._cpf,
					estagiario._regimeContrato,
					estagiario._cpf,
					"abc123"
				)
			);
		} else {
			this._funcionarios.push(
				new Vendedor(
					estagiario._nome,
					estagiario._dataAdmissao,
					estagiario._dataNascimento,
					estagiario._setor,
					estagiario._funcao,
					estagiario._custo,
					estagiario._cpf,
					estagiario._regimeContrato,
					0,
					0,
					0.03
				)
			);
		}
		this.removerFuncionario(cpf);
	}
}

// TESTE DE CLASSES E METODOS

//teste classe Funcionario
const funcionario = new Funcionario(
	"Flavio",
	Date("2020-05-02"),
	Date("2020-05-02"),
	"Produção",
	"Ajudante",
	1500,
	"30951305417"
);
//funcionario.calcularCusto()

//teste classe FuncionarioInterno
const funcionarioInterno = new FuncionarioInterno(
	"Flavio",
	Date("2020-05-02"),
	Date("2020-05-02"),
	"Produção",
	"Ajudante",
	1500,
	"30991305454",
	"CLT"
);
//funcionarioInterno.aumentarCusto(50)

//teste classe Estagiario
const estagiario = new Estagiario(
	"Flavio",
	Date("2020-05-02"),
	Date("2020-05-02"),
	"Produção",
	"Ajudante",
	1500,
	"35251305454",
	"CLT",
	"USP"
);
//exibeMensagemSucesso(estagiario)

//teste Contratada
const contratada = new Contratada(
	"Flavio",
	Date("2020-05-02"),
	Date("2020-05-02"),
	"Produção",
	"Ajudante",
	1500,
	"10951305454",
	"CLT",
	"felipe",
	"abc123"
);
// contratada.logar('felipe','abc123123')
// contratada.alteraSenha('abc123123')
// contratada.logar('felipe','abc123123')

//teste Vendedor
const vendedor = new Vendedor(
	"Flavio",
	Date("2020-05-02"),
	Date("2020-05-02"),
	"Produção",
	"Ajudante",
	1500,
	"30951305453",
	"CLT",
	1000,
	1,
	0.02
);
// vendedor.calculaCusto()
// vendedor.efetuarVenda(200)
// vendedor.calculaCusto()

//teste Funcionário Externo
const funcionarioExerno = new FuncionarioExterno(
	"Flavio",
	Date("2020-05-02"),
	Date("2020-05-02"),
	"Produção",
	"Ajudante",
	1500,
	"30951305954",
	2
);
//exibeMensagemSucesso(funcionarioExerno)

//teste terceirizado
const terceirizado = new Terceirizado(
	"Flavio",
	Date("2020-05-02"),
	Date("2020-05-02"),
	"Produção",
	"Ajudante",
	1500,
	"30959905954",
	2,
	"Empresa 2",
	true
);
//terceirizado.calculaCusto()

const voluntario1 = new Voluntario(
	"Flavio",
	Date("2020-05-02"),
	Date("2020-05-02"),
	"Produção",
	"Ajudante",
	1500,
	"30951301154",
	2,
	42,
	true
);
//exibeMensagemSucesso(voluntario1)

const lista = new ListaFuncionarios();
// lista.adicionaFuncionario(voluntario1)
// lista.adicionaFuncionario(terceirizado)
// lista.buscarFuncionario('30951301154')
// lista.removerFuncionario('30951301154')
// lista.adicionaFuncionario(estagiario)

// lista.efetivarEstagiario('35251305454',1) // 0 para vendedor e 1 para contratada
// lista.imprimeFuncionarios()
