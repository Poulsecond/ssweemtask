const get = (x) => {
    return document.getElementById(x)
}

const button = get("btn")
const ans = get("ans")

function cb() {
    const monthq = get("month")
    const dayq = get("day")
    const yearq = get("year")
    let month = monthq.value
    let day = dayq.value
    let year = yearq.value
    if (month == "" || day == "" || year == "") {
        ans.innerHTML = "<p>Неверные параметры</p>"
    } else if (1900 < Number(year) < 2025 && Number(day) < 31 && Number(month) < 13) {
        let answer = month * (year / day)
        ans.innerText = "Ответ: " + answer.toFixed(2) + "м."
    } else {
        ans.innerText = "Неверные данные"
    }

}
button.addEventListener('click', cb);