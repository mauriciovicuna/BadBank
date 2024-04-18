
function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  
  const [valid, setValid]       = React.useState(false);
  const [create, setCreate]     = React.useState(null);
  const [alert, setAlert]       = React.useState(false);


  function validate(){

    if(name == ''){
      setValid(false)
      setAlert(true)

    }
    else if (!email || email == '' || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) || email == ''){
      console.log("not a valid email")
      setValid(false)
      console.log(valid)
      setAlert(true)
    }
    else if (password.length < 8){
      setValid(false)
      setAlert(true)
    }
    else{
      setValid(true);
      console.log(valid)
      setAlert(false)
    }
    console.log(valid)


  }
  function handleCreate(){
    console.log(name,email,password);
    ctx.users.push({name,email,password,balance:100});
    clearForm();
    setShow(false);
    
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <>{alert ?(
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those fields
      below.
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>):<></>}
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => {setName(e.currentTarget.value); validate()}} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => {setEmail(e.currentTarget.value); validate()}}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => {setPassword(e.currentTarget.value); validate()}}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={!valid}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
    </>
  )
}
