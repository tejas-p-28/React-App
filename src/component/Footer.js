import React from 'react';
function Footer(props){
    console.log("In Footer>>", props)
    return(
        <React.Fragment>
            <hr/>
            <center>
                <h3>&copy; Tejas Developer {props.year}</h3>
            </center>
        </React.Fragment>
    )
}
export default Footer