function OurButton({children, clickFunction, isActive}){

    return(    
    <>
    <button onClick={clickFunction} className={isActive? 'btn btn-warning':'btn btn-info'}>{children}</button>
    </>)

}

export default OurButton;