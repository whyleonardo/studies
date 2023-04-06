const getData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Sucesso')
    // reject('Erro')
  }, 2000)
})

// getData.then(res => console.log(res))
// console.log('Executou')

async function run() {
  try {
    const response = await getData
    console.log(response)

  } catch (err) {
    console.log(err)

  } finally {
    console.log('Promise Terminada')
  }
}

run()





