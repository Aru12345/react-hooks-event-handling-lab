// Code Keypad Component Here
function Keypad(){
    function consoling(){
        console.log('Entering password...')
    }
    return(
        <input type="password" onChange={consoling}/>
    )
}
export default Keypad;