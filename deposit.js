
function Deposit(){
  const [status, setStatus]       = React.useState('');
  const lggd                      = React.useContext(LoggedContext);
  const ctx                       = React.useContext(UserContext);  
  const [amount,setAmount]        = React.useState('')
  const [valid, setValid]         = React.useState(false);
  const [index,setIndex]           = React.useState(null);
  const [alert, setAlert]         = React.useState(false)
 
function validate(e){
  const value = e.target.value;
  setAmount(value);
  if (lggd.user.valid){
    for(let i = 0; i < ctx.users.length; i++){
      if(ctx.users[i].email == lggd.user.email){
        break;
      }
      setIndex(i+1); 
    }

  }
  if(parseFloat(value) > 0 && (parseFloat(value) != NaN || parseFloat(value) != null|| parseFloat(value) != undefined || amount =='' )){
    setValid(true)
    setAlert(false)
  }
  else{
    console.log("enter numeric a valid value")
    setValid(false)
    setAlert(true)}

}
function handleDeposit(){
  if(amount === "" || amount === NaN)
    console.log("Enter a numeric Value")
 else
      ctx.users[index].balance += parseFloat(amount);
      ctx.users[index].transaction = amount;
}
  return(
  <>
  {alert ?
    (<div class="alert alert-primary" role="alert">
    Not a valid value!
    </div>):<></>}
  <></>
  <Card 
    bgcolor="success"
    header="Deposit"
    status={status}
    body={ lggd.user.valid ?
           <>Welcome to the Deposit area!<br/>
           <input type="input" className="form-control" id="deposit" placeholder="Amount" value={amount} onInput={validate}/><br/>
           <button type="submit" className="btn btn-light" onClick={handleDeposit} disabled={!valid}>Deposit</button>
          </>:<>You need to login first to deposit to this content! Go back to Login.
            </>}
  />
  </>)
}
