

function AllData(){
  const ctx = React.useContext(UserContext);


  return (
    <>
    <div className="card" style={{ width: "50em" }}>
      <div className="card-header">Users</div>
        <ul className="list-group list-group-flush">
          {ctx.users.map((user) => ( 
          <>
          <li className="list-group-item" key={JSON.stringify(user.name)}>Name: {user.name} Email : {user.email} password:{user.password} balance : {user.balance}</li>
          </>
          ))
          }
        </ul>
    </div>
    </>
  )
}

