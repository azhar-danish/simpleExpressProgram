const express = require('express')
const app = express()
const port = 3000
const os = require('os');

app.use(express.json());
app.get('/', (req, res) => {
<<<<<<< HEAD
  const podName = os.hostname();
  console.log(`Request handled by pod: ${podName}`);
  res.send(`Hello from Kubernetes! \nResponse served by Pod: ${podName}\n hello aman`);
  //res.send('Hello World! hello azhar,This is deployment.Hello AGLites')
=======
  res.send('Hello World! hello azhar,This is deployment')
>>>>>>> afded51 (update the code)
})
app.get('/home', (req, res) => {
  res.send('Welcom to home')
})

app.get('/about',(req,res)=>{
  res.send('Welcome to about api');
});

app.get('/home/detail',(req,res)=>{
  res.send('Welcome to home detail api');
});

app.post('/user',(req,res)=>{
  console.log('user api called:'+req.body.name);
  res.send('Welcome to user api:'+req.body.name);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



