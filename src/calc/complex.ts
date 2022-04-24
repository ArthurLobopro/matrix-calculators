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
}

function format_diagonal_multiply(array: number[]) {
    return array.map((item, index) => {
        return index === 0 ? `${item}` : item >= 0 ? ` * ${item}` : ` * (${item})`
    }).join('')
}

export function determinant3x3(matrix: matrix) {

    function append2Columns() {
        for (let c = 0; c < 2; c++) {
            for (let l = 0; l < 3; l++) {
                matrix[l].push(matrix[l][c])
            }
        }
    }

    append2Columns()

    const principal_diagonals = matrix.reduce((diagonals, l, index) => {
        diagonals[index].push(matrix[0][index])
        diagonals[index].push(matrix[1][index + 1])
        diagonals[index].push(matrix[2][index + 2])
        return diagonals
    }, [[], [], []] as number[][])

    const sum_principal = principal_diagonals.reduce((total, current_diagonal) => {
        return total + multiplyArray(current_diagonal)
    }, 0)

    const secondary_diagonals = matrix.reduce((diagonals, l, index) => {
        diagonals[index].push(matrix[0][4 - index])
        diagonals[index].push(matrix[1][3 - index])
        diagonals[index].push(matrix[2][2 - index])
        return diagonals
    }, [[], [], []] as number[][])

    const sum_secondary = secondary_diagonals.reduce((total, current_diagonal) => {
        return total + multiplyArray(current_diagonal)
    }, 0)

    const result = sum_principal - sum_secondary

    const calcs = [
        `${principal_diagonals.map(format_diagonal_multiply).join(' + ')} - (${secondary_diagonals.map(format_diagonal_multiply).join(' + ')})`,
        `${sum_principal} - (${sum_secondary})`,
        `${result}`
    ]

    return { calcs, result }
}
