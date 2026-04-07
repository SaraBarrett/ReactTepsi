import { useState } from "react";
import OurButton from "./OurButton";

export default function Delete(){

    const [deleteOn, setDeleteOn]= useState(false);
  
    return (
        <div>
        {deleteOn && <div data-testid="alert" id="alert">
            <h2>Are you sure?</h2>
            <p>These changes can't be reverted!</p>
            <button >Proceed</button>
        </div>}
        <OurButton clickFunction={()=>setDeleteOn(true)}>Delete</OurButton>
        
        </div>    
      );
}