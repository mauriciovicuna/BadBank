
function Withdraw(){
  const [status, setStatus]       = React.useState('');
  const [show, setShow]           = React.useState(true);
  const [logged, setLogged]       = React.useState(false);
  const [valid, setValid]         = React.useState(false);
  const ctx                       = React.useContext(UserContext);  
  const [amount,setAmount]        = React.useState('')
  const lggd                      = React.useContext(LoggedContext);
  const [errormssg, setErrormssg] = React.useState('');
  let index = 0;
function logIn() {
  for(let i = 0; i <ctx.users.length; i++){
    if (ctx.users[i].email == lggd.user.email && ctx.users[i].password == lggd.user.password){
      setLogged(true);
    }
  }
  
}
function validation(){
  setAmount(e.currenteventTarget.value);
  if(parseFloat(amount) != NaN && parseFloat(amount) > 0 ){
    setValid(true);}
  else 
    setValid(false);
  console.log(valid)
}
function handleWithdraw(){
    for(let i = 0; i <ctx.users.length ;i++){
      
    }
    if (logged == true){
      ctx.users[index].balance = balance - amount;
    }
}
  return(
  <>
  <Card 
    bgcolor="danger"
    header="Withdraw"
    status={status}
    body={ logged ?
           (<>Welcome to the Withdraw area!<br/>
           <input type="input" className="form-control" id="withdraw" placeholder="Amount" value={amount} onInput={(e) => {validation}}/><br/>
           <button type="submit" className="btn btn-light" onClick={handleWithdraw} disabled={!valid}>Withdraw</button>
          </>):(<>You need to login first to withdraw to this content! Go back to Login.
            </>)}
  />
  </>)
}