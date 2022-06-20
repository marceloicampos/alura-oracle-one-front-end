// inside folder admin exec npx json-server --watch db.json

// COM FUNÇÃO ASSÍNCRONA
const listaClientes = async () => {
    const response = await fetch(`http://localhost:3000/profile`)
    if (response.ok) {
        return await response.json()
    }
    throw new Error('não possível listar os clientes')
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
    if (response.ok) {
        return response.body
    }
    throw new Error('não possível criar cliente')
}

// COM FUNÇÃO ASSÍNCRONA
const detalhaCliente = async id => {
    const response = await fetch(`http://localhost:3000/profile/${id}`)
    if (response.ok) {
        return await response.json()
    }
    throw new Error('não possível detalhar cliente')
}

// COM FUNÇÃO ASSÍNCRONA
const editaCliente = async (id, nome, email) => {
    const response = await fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    if (response.ok) {
        return await response.json()
    }
    throw new Error('não possível editar cliente')
}

// COM FUNÇÃO ASSÍNCRONA
const removeCLiente = async id => {
    const response = await fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
    if (!response.ok) {
        throw new Error('não possível remover cliente')
    }
    return response
}

export const clienteService = {
    listaClientes,
    criaCliente,
    detalhaCliente,
    editaCliente,
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
// const detalhaCliente = id => {
//     return fetch(`http://localhost:3000/profile/${id}`).then(response => {
//         return response.json()
//     })
// }

////////////////////////////////////////////////////////////////////////

// COM FUNÇÃO SÍNCRONA
// const editaCliente = (id, nome, email) => {
//     return fetch(`http://localhost:3000/profile/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             nome: nome,
//             email: email
//         })
//     }).then(response => {
//         return response.json()
//     })
// }

////////////////////////////////////////////////////////////////////////

// COM FUNÇÃO SÍNCRONA
// const removeCLiente = id => {
//     return fetch(`http://localhost:3000/profile/${id}`, {
//         method: 'DELETE'
//     })
// }
