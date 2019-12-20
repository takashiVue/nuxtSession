import express from 'express'

const router = express.Router()

const app = express();

// pathを引数で渡さなくてもおっけいだよ。その場合は毎リクエストこの処理を実行するよ。
// 何をしてるか考えるなめっちゃ調べて少し理解したが詳細は未だ分からんまじで
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// POST API - /api/login を作るよ
router.post('/login', (req, res) => {
  if (req.body.username === 'takashi' && req.body.password === 'god') {
    req.session.authUser = { username: 'takashi' }
    return res.json({ username: 'takashi' })
  }
  res.status(401).json({ message: 'Bad credentials' })
})

// POST API - /api/logout を作るよ
router.post('/logout', (req, res) => {
  delete req.session.authUser
  res.json({ ok: true })
})

router.get('/test',(req,res)=>{
    console.log('action')
    const id = req.query.id;
    return res.json(id);
})

// サーバーにここにミドルウェアがあることを教える
export default {
  path: '/api',
  handler: router
}
