// funções criadas com function tem seu próprio 'this'
function myFunction() {
  this.name = 'Christian'
}

// funções criadas com const tem o 'this' no escopo onde foram criadas
// criadas aqui, terão o this no contexto do node
// criadas no browser, terão contexto do browser, portanto, serão o objeto window
const anotherFunction = () => {
  this.name = 'Christian'
}

function sameFunction(name, lastname) {
  this.name = name

  const otherFunction = () => {
    this.lastname = lastname
  }
  otherFunction()
}

const functionStatement = new sameFunction('Christian', 'Batista')

// ==============================

function sum(arg1, ...rest) {
  console.log({ firstArg: arg1 })
  console.log({ restArg: rest })
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9)

const otherSum = () => {
  console.log(arguments)
}

otherSum(1, 2, 3, 4, 5)




