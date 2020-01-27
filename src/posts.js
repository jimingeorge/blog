import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Posts extends React.Component{
    constructor(){
        super()
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            const postData = res.data
            console.log(postData);
            
            this.setState({posts:postData})
        })
    }
    render(){
        return(
            <div>
                <h1>Total Posts - {this.state.posts.length}</h1>
                <ul>
                    {this.state.posts.map(post=>{
                        
                        return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Posts