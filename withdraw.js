function Withdraw(){
  const [status, setStatus]     = React.useState('');
  const [show, setShow]         = React.useState(true);
  const [logged, setLogged]     = React.useState(true);
  const [valid, setValid]       = React.useState(false);
  const ctx                     = React.useContext(UserContext);  
  const [amount, setAmount]     = React.useState('');
  const lggd                    = React.useContext(LoggedContext);
  const [errormssg, setErrormssg]= React.useState('');

  function handleWithdraw(){

    if(parseFloat(amount) < 0 || parseFloat(amount) == NaN || parseFloat(amount) != 0){

    console.log("tabien")

  }
  else
  console.log("valid number");
  }
  return(
  <>
  <Card 
    bgcolor="info"
    header="Withdraw"
    status={status}
    body={logged ? (  
           <>Welcome to the Withdraw area!<br/>
           <input type="input" className="form-control" id="withdraw" placeholder="Amount" onChange={ e => {setAmount(e.currentTarget.value)}}/><br/>
           <button type="submit" className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
          </>
          ): 
          <>Go back to the login area</>
          }
  />
  </>)
}
