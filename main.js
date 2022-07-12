// console.log(Array.isArray(recipient))
// console.log(Array.isArray(recipientArr))
// console.log(submitBtn)
// console.log(writerId)

const writerId = document.getElementById("writerId")
const recipient = document.getElementsByName("idle")
const writingText = document.getElementById("writingText")
const submitBtn = document.getElementById("submit")

const result = document.getElementById("result")
const writtenDate =document.getElementById("writtenDate");

/*
memo 나머지 값 (text, date)는 event.target.value로 확인하면 ok
*/ 
submitBtn.addEventListener("click",()=>{
  result.innerHTML = writtenDate.value
})