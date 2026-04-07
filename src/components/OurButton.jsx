function OurButton({children, clickFunction}){

    return(    
    <>
    <button onClick={clickFunction} className="btn btn-info">{children}</button>
    </>)

}

export default OurButton;