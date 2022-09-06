let catMe = require('cat-me')
function randomCat () {
for (let i = 0; i < 3; i++) {
    console.log(catMe());
}
}
console.log(randomCat());