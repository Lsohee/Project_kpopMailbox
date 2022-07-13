const mysql = require("mysql");
/*
* require() : node.js에서 외부 모듈을 가져올때 씀
: mysql 모듈을 가져옴
? (npm과 내가 따로 설치한 mysql은 같은것임?)
*/

const conn = {
  host : 'localhost',
  port : '3306',
  user : 'user name',
  password : 'pw',
  // ! 비빌번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야함
  dataBase : 'DB주소'
}

var connection = mysql.createConnection(conn) 
/*
  * DB 커넥션 생성
  : mysql 모듈에 메서드로 createConnection() 이라는게 있나봐
  : 매개 변수로 객체를 받고 
  : 객체에는 

  host : 'localhost',
  port : '3306',
  user : 'user name',
  password : 'pw',
  dataBase : 'DB주소'

  : 이런게 들어감
*/

connection.connect(); 
// * DB 접속하는 함수 호출 (작동하게)

var testQuery = "INSERT INTO `members`(`username`,`password`) VALUES('test','test');";
/*
pseudo testQuery 라는 변수에 Query 명령문을 문자열로 선언
: innerHTML처럼 문자열을 Query문으로 인식하는 메서드가 있나봐
*/


connection.query(testQuery,function(err, results,fields){
  //connection의 매서드 중 하나인 query
  // * query(‘mysql_query’, callback); 에서 실제 데이터 베이스의 값을 다룹니다.
  // : "mysql_query"는 query 문을 쓰는 매개변수 자리이고
  // : 두번째 매개변수 자리는 통신 관련 function 인가봐
  if(err){ // 만약에 err가 true라면
    console.log(err) //console.log()에 err찍기
  }
  console.log(results); // results를 console.log()찍음
})


 testQuery = 'SELECT * FROM MEMBERS'
 //members라는 테이블에서 모두 선택하라는 문자열로 재할당

 connection.query(testQuery,function(err, results,fields){
  // 재할당한 testquery를 전송하기 위해서 다시 씀
  if(err){
    console.log(err)
  }
  console.log(results)
})


connection.end();// DB 접속 종료