import React from 'react';

import fire from './config/firebase';

class Login extends React.Component{
Login(){
const email=document.querySelector("#email").value;
const password=document.querySelector("#password").value;

fire.auth().signInWithEmailAndPassword(email,password)
.then((u)=>{
    console.log(u);
})
.catch((err)=>{
    console.log("Error: "+err.toString());
})
}

SignUp(){
    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;
    
    fire.auth().createUserWithEmailAndPassword(email,password)
    .then((u)=>{
        console.log(u);
    })
    .catch((err)=>{
        console.log("Error: "+err.toString());
    })
}
    render(){
        return(
            <div style={{textAlign:'center'}}>
<div >
    <div> Email</div>
    <input id="email" placeholder="enter email" type="email" />

</div>
<div>
<div>Password</div>
<input id="password" placeholder="enter password" type="password"/>


            </div>
            <button style={{margin:'10px'}} onClick={this.Login}>Login</button>
            <button style={{margin:'10px'}} onClick={this.SignUp}>SignUp</button>
            
</div>
)
    }
}

export default Login;