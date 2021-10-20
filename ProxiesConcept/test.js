const first = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'first')
  })
  const second = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'second')
  })
  
  Promise.race([first, second]).then(result => {
    console.log(result) // second
  })


const f1 = fetch('/something.json')
const f2 = fetch('/something2.json')

Promise.all([f1, f2])
  .then(res => {
    console.log('Array of results', res)
  })
  .catch(err => {
    console.error(err)
  })
  