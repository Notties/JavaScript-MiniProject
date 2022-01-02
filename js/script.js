var number = prompt("Please Number")

document.getElementById("num").innerHTML = number
var rand = Math.floor(Math.random() * 2)
document.getElementById("result").innerHTML = rand

if (rand == number) {
    alert("ยินดีด้วยคุณถูกรางวัล")
    document.getElementById("out").innerHTML = "ยินดีด้วยคุณถูกรางวัล"
} else{
    document.getElementById("out").innerHTML = "คุณยังไม่ถูกรางวัล"
}