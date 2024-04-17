function Withdraw(){
  const [status, setStatus]       = React.useState('');
  const [show, setShow]           = React.useState(true);
  const [logged, setLogged]       = React.useState(false);
  const [valid, setValid]         = React.useState(false);
  const ctx                       = React.useContext(UserContext);  
  const [amount,setAmount]        = React.useState('')
  const lggd                      = React.useContext(LoggedContext);
  const [errormssg, setErrormssg] = React.useState('');

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
    bgcolor="warning"
    header="Withdraw"
    status={status}
    body={ logged ?
           (<>Welcome to the Withdraw area!<br/>
           <input type="input" className="form-control" id="withdraw" placeholder="Amount" value={amount} onInput={(e) => {validation}}/><br/>
           <button type="submit" className="btn btn-light" onClick={handleWithdraw} disabled={!valid}>Withdraw</button>
          </>):
          <><h1>Nothing to show</h1><br/>
          </>}
  />
  </>)
}