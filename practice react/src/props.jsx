//props r like parameters,(is obj)this is used to pass
//data from parent componet to child

function User({user}) // {name,age} write in a obj to access direct which using . 
// also (data) then direct name will be not be accessible use data.name 
  { 
return(
        <>
    <h2>Name : {user} </h2>

    </>
    )
}
export default User;
