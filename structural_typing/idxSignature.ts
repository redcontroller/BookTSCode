interface User {
    [key: string]: unknown
    name: string
    age: number
}
const heropy: User = {
    name: 'Heropy',
    age: 85
}
heropy['isValid'] = true
heropy['emails'] = ['thesecon@gmail.com', 'test@gmail.com']

console.log(heropy)