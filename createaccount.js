
function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  
  const [valid, setValid]       = React.useState(false);
  const [create, setCreate]     = React.useState(null);

  function validate(){
    if(name == ''){
      setValid(false)
      console.log(valid)
    }
    else if (!email || email == '' || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
      console.log("not a valid email")
      setValid(false)
      console.log(valid)
    }
    else if (password.length < 8){
      setValid(false)
      console.log(valid)
    }
    else{
      setValid(true);
      console.log(valid)
    }


  }
  function handleCreate(){
    console.log(name,email,password);
    validate();
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
  
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => {setName(e.currentTarget.value)}} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => {setEmail(e.currentTarget.value)}}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => {setPassword(e.currentTarget.value)}}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={valid}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}
function clearForm(){
  setName('');
  setEmail('');
  setPassword('');
  setShow(true);
}
