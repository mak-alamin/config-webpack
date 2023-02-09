import Square from './components/Square'
console.log(Square(50))


document.querySelector("#root").innerHTML = "Testing Hot  Module..."


if(module.hot){
    module.hot.accept()
}