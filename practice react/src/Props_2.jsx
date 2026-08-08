//props
function Prop({name="new user"}){  //after= the value is used to display if a value is not passed to function prop then is default value will be displayed
    return(
      <>
      <h2>hello,{name}</h2>
      </>
    )
}
export default Prop;