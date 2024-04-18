
function Withdraw(){
  const [status, setStatus]       = React.useState('');
  const lggd                      = React.useContext(LoggedContext);
  const loggedIn                  = lggd.user.valid;
  const ctx                       = React.useContext(UserContext);  
  const [amount,setAmount]        = React.useState('')
  const [valid, setValid]         = React.useState(true);
  
function validate(e){
  setAmount(e.target.value);
  if((parseFloat(amount) > 0 && (parseFloat(amount) != NaN || parseFloat(amount) != null|| parseFloat(amount) != undefined || amount =='')) ){
    setValid(false)
    console.log(valid);
  }
  else{
    console.log("enter numeric a valid value")
    setValid(true)}

}
function handleWithdraw(){
  if (lggd.user.valid){
    for(let i = 0; i < ctx.users.length; i++){
      if(ctx.users[i].email == lggd.user.email){
        break;
      }
      ctx.users[i+1].balance -=  amount; 
    }

  }
  
 }
  

  return(
  <>
  <Card 
    bgcolor="danger"
    header="Withdraw"
    status={status}
    body={ loggedIn ?
           <>Welcome to the Withdraw area!<br/>
           <input type="input" className="form-control" id="withdraw" placeholder="Amount" value={amount} onChange={validate}/><br/>
           <button type="submit" className="btn btn-light" onClick={handleWithdraw} disabled={valid}>Withdraw</button>
          </>:<>You need to login first to withdraw to this content! Go back to Login.
            </>}
  />
  </>)
}