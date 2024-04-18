

function AllData(){
  const ctx = React.useContext(UserContext);
function update(){
  const div = document.getElementById("users");
  div.innerHTML = ctx.users.map((user) => ( 
    `<p key=${JSON.stringify(user.name)}>Name: ${user.name} Email : ${user.email} password: ${user.password} balance : ${user.balance} last transaction : ${user.transaction}</p>`
    ))
    }


  return (
    <>
    <div className="card" style={{ width: "50em" }}>
      <div className="card-header">Users <button type = "submit" className="btn btn-dark" onClick ={update}>show data</button></div>
      
        <ul className="list-group list-group-flush">
          <div className="list-group-item" id="users"></div>
          
        </ul>
    </div>
    </>
  )
}

