const btn = document.querySelector('button')
console.log(btn)
btn.addEventListener('click', async(e)=>{
    e.preventDefault()
    console.log('hello')
    const userEmail = document.querySelector('#username').value
   const userPassword = document.querySelector('#password').value

   postData = {
    email: userEmail,
    password: userPassword
   }

    const result = await fetch('http://localhost:5000/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    console.log(result)
    if(result.status===200){
        res = await result.json()
        console.log(res)
        return;
    }

    let res = await result.json()
    console.log(res)
})
