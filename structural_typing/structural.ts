interface Vector2D {
    x: number
    y: number
}

interface NamedVector {
    name: string
    x: number
    y: number
}

function calculateLength(v: Vector2D) {
    return Math.sqrt(v.x * v.x + v.y * v.y)
}

const v: NamedVector = {x:3, y:4, name: 'mgh'}
calculateLength(v)