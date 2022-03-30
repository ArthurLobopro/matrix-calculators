/**
 * 
 * @param {number} lines Quantidade de linhas que a matriz terá
 * @param {number} columns Quantidade de Colunas que a matriz terá
 * @param {{ "l==c": string, "l!=c": string} | {"l==c": string, "l>c": string, "l<c": string} | {"l>=c": string, "l<c": string} | {"l>c": string, "l<=c": string}} rules Regras para a geração da matriz
 * @returns {number[][]}
 */

export function make_matrix(lines, columns, rules) {
    const matrix = []

    for (let l = 1; l <= lines; l++) {
        const line = []
        for (let c = 1; c <= columns; c++) {
            const command = Object.entries(rules).find(([condition]) => eval(condition))[1]
            line.push(eval(command))
        }
        matrix.push(line)
    }
    return matrix
}

/**
 * 
 * @param {number[][]} m1 
 * @param {number[][]} m2 
 * @returns {number[][]}
 */
 export function sum(m1, m2) {
    const columns_m1 = m1[0].length
    const lines_m1 = m1.length

    const columns_m2 = m2[0].length
    const lines_m2 = m2.length

    if (columns_m1 === columns_m2 && lines_m1 === lines_m2) {
        return m1.map((line, lineIndex) => {
            return line.map((value, columnIndex) => {
                return value + m2[lineIndex][columnIndex]
            })
        })
    }else{
        const hasEqualsLines = lines_m1 === lines_m2
        const hasEqualsColumns = columns_m1 === columns_m2

        const message = hasEqualsColumns && hasEqualsLines ? "As matrizes não têm o mesmo número de linhas e colunas" :
            hasEqualsColumns ? "As matrizes não têm o mesmo número de colunas" : "As matrizes não têm o mesmo número de linhas"

        throw { message }
    }
}

/**
 * 
 * @param {number[][]} m1 
 * @param {number[][]} m2 
 * @returns {number[][]}
 */
 export function sub(m1, m2) {
    const columns_m1 = m1[0].length
    const lines_m1 = m1.length

    const columns_m2 = m2[0].length
    const lines_m2 = m2.length

    if (columns_m1 === columns_m2 && lines_m1 === lines_m2) {
        return m1.map((line, lineIndex) => {
            return line.map((value, columnIndex) => {
                return value - m2[lineIndex][columnIndex]
            })
        })
    }else{
        const hasEqualsLines = lines_m1 === lines_m2
        const hasEqualsColumns = columns_m1 === columns_m2

        const message = hasEqualsColumns && hasEqualsLines ? "As matrizes não têm o mesmo número de linhas e colunas" :
            hasEqualsColumns ? "As matrizes não têm o mesmo número de colunas" : "As matrizes não têm o mesmo número de linhas"

        throw { message }
    }
}