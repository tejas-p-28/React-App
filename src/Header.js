import React,{Fragment,Component} from 'react';

class Header extends Component{
    render(){
        return(
            <Fragment>
                <Header>
                    <div>Tejas</div>
                    <center>
                        <input/>
                        <div style={{color:'red',fontSize:'30px'}}>User Input Here</div>
                    </center>
                </Header>
                <hr/>
            </Fragment>
        )
    }
}

// const Header = () => {
//     return(
//         <React.Fragment>
//             <center>
//                 <h1>Tejas Patil</h1>
//             </center>
//             <hr></hr>
//         </React.Fragment>
//     )
// }
export default Header