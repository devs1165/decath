import React from 'react'
import './card.css'
import Popup from '../popup/Popup'

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false,
            poptype: '',
            value: {}
        }
    }

    openPostPopup(type, val) {
        this.setState({
            popup: true,
            poptype: type,
            value: val
        })
    }

    closePostPopup() {
        this.setState({
            popup: false
        })
    }


    render() {
        return (
            <React.Fragment>
                {
                    this.props.data.map((v, i) => {
                        return (
                            <div className="card my-3" key={'ind_' + i}>
                                <h5 className="card-header">{v.title}</h5>
                                <div className="card-body">
                                    <p className="card-text">{v.body}</p>
                                    <button className="btn btn-outline-info" onClick={this.openPostPopup.bind(this, 'edit', v)}><i className='fa fa-pencil'></i> Edit</button>
                                    <button className="btn btn-outline-danger ml-2" onClick={this.openPostPopup.bind(this, 'delete', v)}><i className='fa fa-trash-o'></i> Delete</button>
                                </div>

                            </div>
                        )
                    })
                }
                {
                    (this.state.popup) ?
                        <Popup
                            popType={this.state.poptype}
                            closePopup={this.closePostPopup.bind(this)}
                            value={this.state.value}
                        />
                        : null
                }
            </React.Fragment>
        )
    }
}