function Style({children,color="red"}){//childern will be displayed from color the color which is passed will be displayed and from =default color will be set 
 
    return (
        <div style={{ color: 'blue', border: '1px solid black' }}>
            {children}
        </div>
    )
}
export default Style