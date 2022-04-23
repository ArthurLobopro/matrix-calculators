/**
 * 
 * @param {number[][]} matrix 
 * @returns {boolean}
 */
export function isSquareMatrix(matrix) {
    return matrix.every(line => line.length === matrix.length)
}

/**
 * 
 * @param {number[][]} matrix 
 * @param {number} order 
 * @returns {boolean}
 */
export function isSquareOrder(matrix, order) {
    return isSquareMatrix(matrix) && matrix.length === order
}

export function isEqualFormat(m1, m2) {
    const columns_m1 = m1[0].length
    const lines_m1 = m1.length
    const columns_m2 = m2[0].length
    const lines_m2 = m2.length

    const hasEqualsLines = lines_m1 === lines_m2
    const hasEqualsColumns = columns_m1 === columns_m2

    return hasEqualsColumns && hasEqualsLines
}