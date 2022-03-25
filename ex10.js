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

const contasClientes = [
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

const sacar = (id, valor) => {
  let conta = contasClientes.find(clienteId => clienteId.id === id);
  if (conta !== undefined) {
    if( valor <= 0) {
      console.log("Valor inválido")
      return
    }
    if(valor > cliente.saldo - valor)
    console.log()
   }}