import React from 'react'
import './popup.css'
import { editPostsById, deletePostsById } from '../../../actions/blogAction'
import connect from 'redux-connect-decorator';


@connect((store) => {
    return {
        edit: store.blog.edit,
        delete: store.blog.delete
    }
})

export default class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.closePopup = this.closePopup.bind(this);
    }

    componentDidMount() {
        if (this.refs['title'] && this.refs['body']) {
            this.refs['title'].value = this.props.value.title;
            this.refs['body'].value = this.props.value.body;
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.delete !== nextProps.delete) {
            this.closePopup()
        }
        if (this.props.edit !== nextProps.edit) {
            this.closePopup()
        }
    }
    closePopup() {
        this.props.closePopup()
    }

    savePopupDetail() {
        if (this.refs['title'].value && this.refs['body'].value) {
            var ip_title = this.refs['title'].value;
            var ip_body = this.refs['body'].value;
        }

        var data = {
            title: ip_title,
            body: ip_body,
            userId: this.props.value.userId,
            id: this.props.value.id
        }
        this.props.dispatch(editPostsById(data))
    }

    deletePost() {
        this.props.dispatch(deletePostsById(this.props.value))
    }
    
  
    render() {
        if (this.props.popType === "edit") {
            return (
                <div className='popup-main-container'>
                    <div className='text-right'>
                        <i className='fa fa-close close-popup-icon' onClick={this.closePopup.bind(this)}></i>
                    </div>
                    <div className='popup-wrapper mx-auto col-xs-10 col-sm-10 col-md-8 col-lg-6 col-xl-6 p-5'>
                        <input type="text" className="form-control popup-title-input my-2" ref='title' />
                        <textarea name="" cols="30" rows="10" className='my-2 mb-3 form-control popup-body-input' ref='body'></textarea>
                        <input className='btn btn-outline-info' type="button" value='save' onClick={this.savePopupDetail.bind(this)} />
                        <input className='btn btn-outline-danger ml-2' type="button" value='cancel' onClick={this.closePopup.bind(this)} />
                    </div>
                </div>
            )

        }
        else if (this.props.popType === "delete") {

            return (
                <div className='popup-main-container'>
                    <div className='text-right'>
                        <i className='fa fa-close close-popup-icon' onClick={this.closePopup.bind(this)}></i>
                    </div>
                    <div className='popup-wrapper mx-auto text-center col-xs-8 col-sm-8 col-md-8 col-lg-6 col-xl-6 p-5'>
                        <div className='confirmation-text p-5'>Confirm your action ?</div>
                        <input className='btn btn-outline-info' type="button" value='Yes' onClick={this.deletePost.bind(this)} />
                        <input className='btn btn-outline-danger ml-2' type="button" value='NO' onClick={this.closePopup.bind(this)} />
                    </div>
                </div>
            )
        }
    }
}