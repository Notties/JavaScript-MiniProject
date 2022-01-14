let point = 0
let check = false
let h = String("หัว");
let g = String("ก้อย");

var cnt = prompt("Enter Rounds")
for (var i = 1; i <= cnt; i++) {

    check = false
    do {
        var ans = prompt("หัว หรือ ก้อย ทายมาเลย")
        let resulth = ans.localeCompare(h)
        let resultg = ans.localeCompare(g)

        if (resultg == 0 || resulth == 0) {
            check = true
        } else {
            alert("กรุณาใส่ข้อความ หัว หรือ ก้อย ให้ถูกนะ!")
        }
    } while (!check)

    let rand_ans = ""

    if (Math.floor(Math.random() * 2) == 0) {
        rand_ans = "หัว"
    } else {
        rand_ans = "ก้อย"
    }

    if (ans == rand_ans) {
        point = point + 1
        document.getElementById("game-list").innerHTML += "รอบที่: " + i + " ตอบ: " + ans + "<br>" + "คำตอบคือ: " + rand_ans + "<br>"
        alert("ตอบถูกเก่งนะเนี้ย!")
    } else {
        document.getElementById("game-list").innerHTML += "รอบที่: " + i + " ตอบ: " + ans + "<br>" + "คำตอบคือ: " + rand_ans + "<br>"
        alert("อ้าวตอบผิดซะงั้น!")
    }
}

document.getElementById("game-list").innerHTML += "<br>" + "รวมคะแนนที่ได้: " + point
