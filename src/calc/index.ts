import { sub, sum } from "./simple"



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
            line.push(eval(command as string))
        }
        matrix.push(line)
    }
    return matrix
}

export { sub, sum }