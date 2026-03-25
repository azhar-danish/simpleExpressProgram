const express = require('express')
const app = express()
const port = 3000
const os = require('os');

app.get('/', (req, res) => {
  const podName = os.hostname();
  console.log(`Request handled by pod: ${podName}`);
  res.send(`Hello from Kubernetes! \nResponse served by Pod: ${podName}\n`);
  //res.send('Hello World! hello azhar,This is deployment.Hello AGLites')
})
app.get('/home', (req, res) => {
  res.send('Welcom to home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

