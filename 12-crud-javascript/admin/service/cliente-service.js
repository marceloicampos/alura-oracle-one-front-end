// inside folder admin exec npx json-server --watch db.json

// COM FUNÇÃO ASSÍNCRONA
const listaClientes = async () => {
    const response = await fetch(`http://localhost:3000/profile`)
    return await response.json()
}

// COM FUNÇÃO ASSÍNCRONA
const criaCliente = async (nome, email) => {
    const response = await fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    return response.body
}

// COM FUNÇÃO ASSÍNCRONA
const removeCLiente = async id => {
    const response = await fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
    return response
}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCLiente
}

////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////

// COM FUNÇÃO SÍNCRONA
// const criaCliente = (nome, email) => {
//     return fetch(`http://localhost:3000/profile`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             nome: nome,
//             email: email
//         })
//     }).then(response => {
//         return response.body
//     })
// }

////////////////////////////////////////////////////////////////////////

// COM FUNÇÃO SÍNCRONA
// const removeCLiente = id => {
//     return fetch(`http://localhost:3000/profile/${id}`, {
//         method: 'DELETE'
//     })
// }
