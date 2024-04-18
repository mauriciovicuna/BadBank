function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users: [{name:'abel',email:'abel@mit.edu',password:'secret',balance:100, transaction:0},{name:'mauricio',email:'mauricio@gmail.com',password:'1234',balance:100,transaction:0}]}}>
      <LoggedContext.Provider value={{user:{email : '',password : '',valid : false}}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/createaccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>
        </LoggedContext.Provider>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
