import React from 'react'
import './confirmation.css'
export default class Confirmation extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    closeToast(){
        this.props.close()
    }
    render(){
        console.log(this.props.type)
        if(this.props.type ==='delete'){
            return(
                <div className='toast-container delete text-right m-3'>
                    <div className='p-2'>
                        <i className='fa fa-close' onClick ={this.closeToast.bind(this)}></i>
                        <div className='text-center'>
                            <i className='fa fa-trash-o'></i> &nbsp;
                                This blog is deleted
                            
                        </div>
                    </div>
                </div>
            )

        }
        else if(this.props.type === 'edit'){
            return(
                <div className='toast-container edit text-right m-3'>
                    <div className='p-2'>
                        <i className='fa fa-close' onClick ={this.closeToast.bind(this)}></i>
                        <div className='text-center'>
                            <i className='fa fa-floppy-o'></i> &nbsp;
                                Changes saved 
                            
                        </div>
                    </div>
                </div>
            )
        }
    }
}