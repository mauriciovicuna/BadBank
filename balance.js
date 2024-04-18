
function Balance(){
  const [status, setStatus]       = React.useState('');
  const ctx                       = React.useContext(UserContext);  
  const lggd                      = React.useContext(LoggedContext);
  const [index, setIndex]         = React.useState(null);
  const [message, setMessage]         = React.useState(null);
  const [userbalance, setUserbalance] = React.useState(null);

function showBalance(){
     const value = ctx.users.filter(u => u.email == lggd.user.email);
      setUserbalance(value[0].balance);
}

  return (
    <>
    <Card 
    bgcolor="info"
    header="Balance"
    status={status}
    body={ lggd.user.valid ?(
            <>
            <h4>Your current balance is: {userbalance}</h4>
            <button type="button" className="btn btn-dark" onClick={showBalance}>show balance</button>
            </>):
            <>Welcome to your balance area!<br/>You need to login first to see your balance in this content! Go back to Login.<br/>
            </>}
  />
    </>

  )
}
