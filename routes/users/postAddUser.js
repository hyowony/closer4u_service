//회원 가입 기능
//회원가입 시나리오 클라이언트가 회원가입 정보를 담아서 POST /api/users/ URL 요청을 보낸다 요청을 받은 정보가 유효한지 확인하고 요청 받은 정보를 테이블에 저장한다

const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/users', (req, res) => {
  res.send('로그인입니다.');
});

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});
