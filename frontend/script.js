async function test() {

const res = await fetch("https://settest.onrender.com/")

const data = await res.json()

document.getElementById("result").innerText = JSON.stringify(data)

}