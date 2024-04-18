
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
  const [valid,setValid]        = React.useState(false);
function handleEmail(e){
  const value = e.target.value;
  let valid = false
  setEmail(value);
  for (let i = 0; i < ctx.users.length ; i++){
    if (ctx.users[i].email == value){
      valid = true;
      break ;
      
    }
}
  if(valid == true){
    setValidE(valid);
    lggd.user.email = email;
  }
  else{
    setValidE(false)}
 
}

function handlePassword(e){
    let valid = false;
  const value = e.target.value;
  setPassword(value);
  for (let i = 0; i < ctx.users.length ; i++){
    if (ctx.users[i].password == value){
      valid = true;
      break ;
    }
}
if(valid == true){
  setValidP(true);
  lggd.user.password = password;
}
else{
  setValidP(false)}

}




function validate(){
 setValid(true);
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
    body={ valid ? (  
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
