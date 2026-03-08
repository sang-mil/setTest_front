async function test() {
  try {

    const res = await fetch("https://settest.onrender.com/");

    if (!res.ok) {
      throw new Error("API error");
    }

    const data = await res.json();

    document.getElementById("result").innerText =
      JSON.stringify(data, null, 2);

  } catch (error) {

    document.getElementById("result").innerText =
      "API 요청 실패: " + error.message;

  }
}