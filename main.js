// console.log(Array.isArray(recipient))
// console.log(Array.isArray(recipientArr))
// console.log(submitBtn)
// console.log(writerId)

const writerId = document.getElementById("writerId")
const recipient = document.getElementsByName("idle")
const writingText = document.getElementById("writingText")
const submitBtn = document.getElementById("submit")

const result = document.getElementById("result")
console.log(result)

/*
 pseudo 라디오 버튼 값 가져오는 법
 memo 현재 recipient 는 유사 배열
 memo getElementsByName 은 같은 이름의 라디오버튼 목록을 전부 가지고 옴
 memo 가져온 라디오 버튼 목록을 순회(for Each 배열 메서드)하면서 node(라디오 버튼)의checked값이 true인지 확인
 memo 값이 true인 경우 해당 node(라디오 버튼 )의 value값 출력
*/



submitBtn.addEventListener("click",()=>{
  recipient.forEach((node)=>{
    if(node.checked){
      result.innerHTML = node.value
    }
  })
}) // 이렇게 하면 답이 나온다