// backend의 시작점.
// 이유 : 내가 package.json에서 scripts의 "satrt"를 "node index.js"로 설정했기 때문이다.

const express = require('express') //express를 가져온다.
const app = express() // function을 이용해 express app을 사용한다.
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!') // root경로로 오면 Hello World! 라는 것을 출력시키게 만들음.
})

app.listen(port, () => { // localhost에 연결이 되면 아래의 메세지를 띄워준다.
  console.log(`Example app listening on port ${port}`)
})