// inside folder admin exec npx json-server --watch db.json

// COM FUNÇÃO ASSÍNCRONA
const listaClientes = async () => {
    const response = await fetch(`http://localhost:3000/profile`)
    return await response.json()
}

export const clienteService = {
    listaClientes
}

// COM FUNÇÃO SÍNCRONA
// const listaClientes = () => {
//     return fetch(`http://localhost:3000/profile`).then(response => {
//         return response.json()
//     })
// }

// COM PROMISE
// const listaClientes = () => {
//     const promise = new Promise((resolve, reject) => {
//         const http = new XMLHttpRequest()
//         http.open('GET', 'http://localhost:3000/profile')
//         http.onload = () => {
//             if (http.status >= 400) {
//                 reject(JSON.parse(http.response))
//             } else {
//                 resolve(JSON.parse(http.response))
//             }
//         }
//         http.send()
//     })
//     // console.log(promise)
//     return promise
// }
