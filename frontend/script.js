const API = "https://settest.onrender.com"

const resultBox = document.getElementById("result")

async function callAPI(path){

  resultBox.innerText = "Loading..."

  try{

    const res = await fetch(API + path)

    if(!res.ok){
      throw new Error("status: " + res.status)
    }

    const data = await res.json()

    resultBox.innerText =
      JSON.stringify(data, null, 2)

  }catch(err){

    resultBox.innerText =
      "요청 실패\n\n" + err

  }

}

document.getElementById("homeBtn")
  .addEventListener("click", () => callAPI("/"))

document.getElementById("dbBtn")
  .addEventListener("click", () => callAPI("/db"))

document.getElementById("dataBtn")
  .addEventListener("click", () => callAPI("/data"))