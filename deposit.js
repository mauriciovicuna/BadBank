function Deposit(){
  const [status, setStatus]       = React.useState('');
  const [show, setShow]           = React.useState(true);
  const [logged, setLogged]       = React.useState(false);
  const [valid, setValid]         = React.useState(false);
  const ctx                       = React.useContext(UserContext);  
  const [amount,setAmount]        = React.useState('')
  const lggd                      = React.useContext(LoggedContext);
  const [errormssg, setErrormssg] = React.useState('');
  return (
    <Card 
    bgcolor="success"
    header="Deposit"
    status={status}
    body={ logged ?
           (<>Welcome to the Deposit area!<br/>
           <input type="input" className="form-control" id="deposit" placeholder="Amount" value={amount} onInput={(e) => {validation}}/><br/>
           <button type="submit" className="btn btn-light" onClick={handleWithdraw} disabled={!valid}>Deposit</button>
          </>):(<>You need to login first to withdraw to this content! Go back to Login.
            </>)}
  />
  )
}
