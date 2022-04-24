import { matrix } from "./types"

function multiplyArray(array: number[]) {
    return array.reduce((total, value) => total * value, 1)
}

export function determinant2x2(matrix: matrix) {
    const principal_diagonal: number[] = []
    const secondary_diagonal: number[] = []

    matrix.forEach((line, line_index) => {
        line.forEach((column, column_index) => {
            line_index === column_index ? principal_diagonal.push(column) : secondary_diagonal.push(column)
        })
    })

    const sum_principal = multiplyArray(principal_diagonal)
    const sum_secondary = multiplyArray(secondary_diagonal)
    const result = sum_principal - sum_secondary

    const calcs = [
        `${principal_diagonal.join(' * ')} - (${secondary_diagonal.join(' * ')})`,
        `${sum_principal} - (${sum_secondary})`,
        `${result}`
    ]

    return { calcs, result }
