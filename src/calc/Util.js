/**
 * 
 * @param {number[][]} matrix 
 * @returns {boolean}
 */
 export function isSquareMatrix(matrix){
    return matrix.every(line => line.length === matrix.length)
}

/**
 * 
 * @param {number[][]} matrix 
 * @param {number} order 
 * @returns {boolean}
 */
export function isSquareOrder(matrix, order){
    return isSquareMatrix(matrix) && matrix.length === order
}

