router.post('/users', async (req, res) => {
  const {account_id, nickname, password, check_password, ...} = req.body;
  // 예외처리를 다 하고 내려와야한다
  await 유저.create({account_id, nickname, password, ...});
  res.status(201).json({message : "회원가입에 성공했습니다."})
})
dsfdfdf