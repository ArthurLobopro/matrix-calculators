import { matrix } from "./types"

export function isSquareMatrix(matrix: matrix): boolean {
    return matrix.every(line => line.length === matrix.length)
}

export function isSquareOrder(matrix: matrix, order: number): boolean {
    return isSquareMatrix(matrix) && matrix.length === order
}

export function isEqualFormat(m1: matrix, m2: matrix): boolean {
    const columns_m1 = m1[0].length
    const lines_m1 = m1.length
    const columns_m2 = m2[0].length
    const lines_m2 = m2.length

    const hasEqualsLines = lines_m1 === lines_m2
    const hasEqualsColumns = columns_m1 === columns_m2

    return hasEqualsColumns && hasEqualsLines
}