import React,{Fragment,Component} from 'react';
import './Header.css';

class Header extends Component{

    constructor(){
        super()
        this.state={
            title:'React Developer',
            keywords:'User text here'
        }
    }
    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({keywords:event.target.value?event.target.value:'User Input Here'})
        this.props.userInput(event.target.value);
    }

    render(){
        console.log(">>>inside render>>>")
        return(
            <Fragment>
                <Header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{color:'white', fontSize:'20px'}}>{this.state.keywords}</div>
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