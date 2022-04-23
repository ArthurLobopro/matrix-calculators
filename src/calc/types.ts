export type matrix = number[][]
export type calcs_matrix = string[][]
export type defaultReturns = { calcs: calcs_matrix, result: matrix } | undefined
export type make_rules = (
    { "l==c": string, "l!=c": string } |
    { "l==c": string, "l>c": string, "l<c": string } |
    { "l>=c": string, "l<c": string } |
    { "l>c": string, "l<=c": string } |
    { "true": string }
)