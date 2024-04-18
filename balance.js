function Balance(){
  const [status, setStatus]       = React.useState('');
  const ctx                       = React.useContext(UserContext);  
  const lggd                      = React.useContext(LoggedContext);
  const [index, setIndex]         = React.useState(null);
  const [loggedIn, setLoggedIn]   = React.useState(lggd.user.valid);
  const [message, setMessage]     = React.useState('')

React.useEffect(()=>{
  function value(){
    let j;
    for(let i = 0; i < ctx.users.length; i++){
      if(ctx.users[i].email == lggd.user.email){
        break;
      }
      j = i+1;
      
      
    }
    const value = ctx.users[j].balance;
    setMessage(value);
  }
  if(lggd.user.valid)
  {  
    value()
  }
  else{setMessage('')};

  return ()=> {};
    
},[lggd.user.valid])
  return (
    <>
    <Card 
    bgcolor="info"
    header="Balance"
    status={status}
    body={ lggd.user.valid ?(
            <>
            <h4>Your current balance is: {(message)} </h4>
            </>):
            <>Welcome to your balance area!<br/>You need to login first to see your balance in this content! Go back to Login.<br/>
            </>}
  />
    </>

  )
}
