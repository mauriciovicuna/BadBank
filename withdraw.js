
function Withdraw(){
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
  let j ;
  if (lggd.user.valid){
    for(let i = 0; i < ctx.users.length; i++){
      if(ctx.users[i].email == lggd.user.email){
        break;
      }
      j = i+1; 
    }

  }
  if(parseFloat(value) > 0 && (parseFloat(value) != NaN || parseFloat(value) != null|| parseFloat(value) != undefined || amount =='' ) && parseFloat(value) <= ctx.users[j].balance){
    setValid(true)
    setAlert(false)
    setIndex(j);
  }
  else{
    console.log("enter numeric a valid value")
    setValid(false)
    setAlert(true)
    }

}
function handleWithdraw(){
  if(amount === "" || amount === NaN)
    console.log("Enter a numeric Value")
 else
      ctx.users[index].balance -= amount;
      ctx.users[index].transaction = -(amount);
}
  return(

  <>{alert ?
    (<div class="alert alert-primary" role="alert">
    Not a valid value!
    </div>):<></>}
  <></>
  <Card 
    bgcolor="danger"
    header="Withdraw"
    status={status}
    body={ lggd.user.valid ?
           <>Welcome to the Withdraw area! <br/>
           <input type="input" className="form-control" id="withdraw" placeholder="Amount" value={amount} onInput={validate}/><br/>
           <button type="submit" className="btn btn-light" onClick={handleWithdraw} disabled={!valid}>Withdraw</button>
          </>:<>You need to login first to withdraw to this content! Go back to Login.
            </>}
  />
  </>)
}