import { isEqualFormat } from "./Util.js"

import { matrix, defaultReturns } from "./types"



function subOrSum(m1: matrix, m2: matrix, operation: "+" | "-"): defaultReturns {
    if (isEqualFormat(m1, m2)) {
        const calcs_matrix = m1.map((line, lineIndex) => {
            return line.map((value, columnIndex) => {
                return `${value} ${operation} ${m2[lineIndex][columnIndex]}`
            })
        })
        const result_matrix = calcs_matrix.map(line => line.map(column => eval(column)))

        return { calcs: calcs_matrix, result: result_matrix }
    }
}

export function sum(m1: matrix, m2: matrix): defaultReturns {
    if (isEqualFormat(m1, m2)) {
        return subOrSum(m1, m2, '+')
    } else {
        const message = "As matrizes informadas não são de mesma ordem."
        throw { message }
    }
}

export function sub(m1: matrix, m2: matrix): defaultReturns {
    if (isEqualFormat(m1, m2)) {
        return subOrSum(m1, m2, '-')
    } else {
        const message = "As matrizes informadas não são de mesma ordem."
        throw { message }
    }
}

export function multiply(matrix: matrix, multiplier: number): defaultReturns {
    const calcs_matrix = matrix.map(line => line.map(value => `${value} * ${multiplier}`))
    const result_matrix = calcs_matrix.map(line => line.map(column => eval(column)))

    return { calcs: calcs_matrix, result: result_matrix }
}