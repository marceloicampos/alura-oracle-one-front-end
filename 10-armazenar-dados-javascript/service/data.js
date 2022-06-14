export const removeDatasRepetidas = datas => {
    const datasUnicas = []
    datas.forEach(data => {
        if (datasUnicas.indexOf(data.date) === -1) {
            datasUnicas.push(data.date)
        }
    })
    return datasUnicas
}
