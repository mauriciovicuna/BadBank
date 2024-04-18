
function Login(){
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [status, setStatus]     = React.useState('');
  const lggd                    = React.useContext(LoggedContext);
  const ctx                     = React.useContext(UserContext); 
  const [exist, setExist]       = React.useState(false);


function validate(){
 for (let i = 0; i<ctx.users.length ; i++){
    if ((ctx.users[i] == email && ctx.users[i] == password) && (ctx.users[i]!= '' || ctx.users[i]!= '') ){
      break ;
    }
      setExist(true);
      console.log(ctx.users[i]);
      lggd.user = {email: email, password:password, valid: true};
 }
 console.log(lggd.user)
 if (exist){
  handleLogin()
 }
}
  function handleLogin() {    
    console.log("exito")

  }
  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');

  }
  function handleLogout(){
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
          <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
          Password<br/>
          <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
          <button type="submit" className="btn btn-light" onClick={validate}>Login</button>
          </>}
  /><br/>
  
  </>
  )  
}
