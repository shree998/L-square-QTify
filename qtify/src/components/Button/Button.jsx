import React from "react";
import styles from "./Button.module.css";

 function Button({children}) {
    return (
        <div style={styles.button}>
         <button>{children}</button>
        </div>
       
    )
}

export default Button;