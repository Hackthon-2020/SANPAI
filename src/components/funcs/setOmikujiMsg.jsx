import React from 'react'

class setOmikujiMsg extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.msg}</h1>
            </div>
        )
    }
}

export default setOmikujiMsg;