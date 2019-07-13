import React from 'react';
import NestedRouter from './master/NestedRouter/NestedRouter'; 

export default class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <NestedRouter routes = {this.props.routes} />
                </div>
            </React.Fragment>
        )
    }
}