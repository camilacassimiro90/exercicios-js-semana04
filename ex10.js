// 1. Declare como variável em seu código o array de contas de clientes abaixo;

// 2. Crie uma função para sacar dinheiro que deve receber como parâmetro o valor a ser sacado e o id da conta;
// 2.1. Se o valor for menor ou igual zero deve exibir a mensagem de valor inválido e não realizar nenhuma operação;
// 2.2. Se o valor for maior que o saldo em conta deve exibir a mensagem de saldo insuficiente e exibir o saldo atual;
// 2.3. Se o valor for maior que zero e menor que o saldo em conta deve exibir a mensagem informado que o saque ocorreu com sucesso e o saldo atual da conta após o saque, além de atualizar o array com esse novo valor;

// 3. Criar função para depositar dinheiro que deve receber como parâmetro o valor a ser depositado e o id da conta;
// 3.1. Se o valor for menor ou igual zero deve exibir a mensagem de valor inválido e não realizar nenhuma operação;
// 3.2. Se o valor for maior que zero deve exibir a mensagem informado que o deposito ocorreu com sucesso e o saldo atual da conta após o deposito, além de atualizar o array com esse novo valor;

// 4. Chamar as duas funções criadas para validar os cenários;

// **contasClientes :** [
//   {
//     id: 1,
//     saldo: 500,
//   },
//   {
//     id: 2,
//     saldo: 30000,
//   },
//   {
//     id: 3,
//     saldo: 50,
//   },
// ];

// _Dica: Dê uma olhadinha em find, map, if..._

let contasDeClientes = [
  {
    id: 1,
    saldo: 500
  },
  {
    id: 2,
    saldo: 30000
  },
  {
    id: 3,
    saldo: 50
  }
]
const atualizaSaldo = (id, saldo) => {
  contasDeClientes = contasDeClientes.map(conta =>
    conta.id === id ? { ...conta, saldo } : conta
  )
  console.log(`Seu saldo atual é R$ ${saldo}`)
} // vai atualizar o array usando o spread.
const saque = (id, valor) => {
  let clienteId = contasDeClientes.find(cliente => cliente.id === id)
  let conta = clienteId.saldo
  if (valor <= 0) {
    console.log(`Valor inválido!`)
  } else if (valor > clienteId.saldo) {
    console.log('Saldo insuficiente!')
    console.log('Saldo atual: ' + clienteId.saldo)
  } else if (valor > 0 && valor < clienteId.saldo) {
    console.log(`Saque realizado com sucesso!`)
    const saldo = clienteId.saldo - valor
    atualizaSaldo(id, saldo)
  }
}
const deposito = (id, valor) => {
  let clienteId = contasDeClientes.find(cliente => cliente.id === id)
  let conta = clienteId.saldo
  if (valor <= 0) {
    console.log(`Valor inválido!`)
  } else if (valor > 0) {
    console.log(`Deposito realizado com sucesso!`)
    const saldo = clienteId.saldo + valor
    atualizaSaldo(id, saldo)
  }
}
saque(1, -50)
deposito(1, 100)
saque(1, 40)
saque(1, 50)
