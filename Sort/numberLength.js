//მოცემულია რიცხვი. დააუბრეთ რამდენ ნიშნაა (ასევე თითოეულ თანრიგზე რა ციფრი დგას).

function numberLength(num) {
    let arr = num.toString().split('')

    for (let i = 0; i < arr.length; i++) {
    console.log(`Digit ${i + 1}: ${arr[i]}`)
    }

    return arr.length
}

console.log(numberLength(12332))
