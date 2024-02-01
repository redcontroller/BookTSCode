class Duck {
    quack() {
        console.log('꽥!')
    }

    feathers() {
        console.log('깃털은 검정색과 흰색')
    }
}

class Human {
    quack() {
        console.log('사람인데요? 꽥!')
    }

    feathers() {
        console.log('사람이라 깃털은 없어요. 하지만 털은 있습니다.')
    }
}

function inTheForest(duck: any) {
    duck.quack()
    duck.feathers()
}

inTheForest(new Duck())
inTheForest(new Human())