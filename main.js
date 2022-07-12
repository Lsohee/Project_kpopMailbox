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

/*
pseudo 필요한 정보의 값을 받아드리는 input 태그의 종류
--> id : text
--> writtenDate : date

pseudo textarea 는 독립된 태그다
: writingText : textarea
*/ 

