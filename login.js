
function Login(){
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [status, setStatus]     = React.useState('');
  const lggd                    = React.useContext(LoggedContext);
  const ctx                     = React.useContext(UserContext); 
  const [exist, setExist]       = React.useState(false);
  const [validP,setValidP]      = React.useState(false);
  const [validE,setValidE]      = React.useState(false);
  const [valid,setValid]        = React.useState();

function handleEmail(e){
  const value = e.target.value;
  let v = false
  setEmail(value);
  for (let i = 0; i < ctx.users.length ; i++){
    if (ctx.users[i].email == value){
      v = true;
      break ;
      
    }
}
  if(v == true){
    setValidE(v);
   
  }
  else{
    setValidE(false)}
 
}

function handlePassword(e){
    let v= false;
  const value = e.target.value;
  setPassword(value);
  for (let i = 0; i < ctx.users.length ; i++){
    if (ctx.users[i].password == value){
      v = true;
      break ;
    }
}
if(v == true){
  setValidP(true);
 
}
else{
  setValidP(false)}

}




function validate(){
 setValid(true);
 lggd.user.email = email;
 lggd.user.password = password;
 lggd.user.valid = true;
 setValidE(false);
 setValidP(false);
}

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');

  }
  function handleLogout(){
    setValid(false)
    clearForm();
    lggd.user = {email: '', password: '', valid: false};
    
  }



  //<div class="alert alert-warning alert-dismissible fade show" role="alert"></div>//

  return (
    <>
    <Card 
    bgcolor="info"
    header="Login"
    status={status}
    body={ lggd.user.valid ? (  
           <>
           <button type="submit" className="btn btn-light" onClick={handleLogout}>Logout</button>
           </>
          ): <>Email address<br/>
          <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={handleEmail}/><br/>
          Password<br/>
          <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={handlePassword}/><br/>
          <button type="submit" className="btn btn-light" onClick={validate} disabled={!(validE&&validP)}>Login</button>
          </>}
  /><br/>
  
  </>
  )  
}
