import React from 'react'
import Card from './master/blog/Card'
import connect from 'redux-connect-decorator';
import { fetchAllPosts } from '../actions/blogAction'

@connect((store) => {
    return {
        posts: store.blog.posts
    }
})


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchAllPosts())
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.posts !== nextProps.posts) {
            this.setState({
                posts: nextProps.posts
            })
        }
    }

    render() {
        return (
            <div className='container'>
                <Card
                    data={this.state.posts}
                />
            </div>
        )
    }
}