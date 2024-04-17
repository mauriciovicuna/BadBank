
function Login(){
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [status, setStatus]     = React.useState('');
  const [show, setShow]         = React.useState(true);
  const [logged, setLogged]     = React.useState(false);
  const [valid, setValid]       = React.useState(false);
  const ctx                     = React.useContext(UserContext);  
  const lggd                    = React.useContext(LoggedContext);
   let validUser;

  let handleLogin = (e) => {
    e.preventDefault();

    for(let i = 0; i < ctx.users.length; i++){
      if (ctx.users[i].email == email){
        validUser = ctx.users[i];
      }
    }
    console.log(validUser);
    if (validUser) {
      console.log("Correct user")
      if(validUser.password == password){
       
        console.log("Login succesfull")
        setShow(false);
        setLogged(true);
        lggd.user = validUser;
        console.log(lggd.user);
      }
      else
        console.log("wrong password")
        setShow(true);
    }
    else

      console.log("Not valid user");
      setShow(true);
      setValid(false);

    }

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }
  function handleLogout(){
    clearForm();
    setLogged(false);
  }

  function classes(){
    let alert;
    alert = valid ? 'alert-success' : 'alert-danger';
    console.log(valid);
    const x ='alert ' + alert + ' alert-dismissible fade show';
    return  x;
    
  }

  //<div class="alert alert-warning alert-dismissible fade show" role="alert"></div>//

  return (
    <>
      <div className={classes()} 
      role="alert"
      body={valid ?(
        <>
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.<br/>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button></>):
        <><h1>Nothing to show</h1><br/>
        </>}
    />
    <Card 
    bgcolor="info"
    header="Login"
    status={status}
    body={logged ? (  
           <>
           <div id="greet"></div><br/>
           <button type="submit" className="btn btn-light" onClick={handleLogout}>Logout</button>
           </>
          ): <>Email address<br/>
          <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
          Password<br/>
          <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
          <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
          </>}
  /><br/>
  
  </>
  )  
}