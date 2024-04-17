function Balance(){
  const [status, setStatus]       = React.useState('');
  const [show, setShow]           = React.useState(true);
  const [logged, setLogged]       = React.useState(false);
  const [valid, setValid]         = React.useState(false);
  const ctx                       = React.useContext(UserContext);  
  const [amount,setAmount]        = React.useState('')
  const lggd                      = React.useContext(LoggedContext);
  const [errormssg, setErrormssg] = React.useState('');

  return (<>
    <Card 
    bgcolor="info"
    header="Balance"
    status={status}
    body={ logged ?
           (<>Welcome to your balance area!<br/>
          </>):(<>You need to login first to withdraw to this content! Go back to Login.
            </>)}
  />
    </>
    
  )
}
