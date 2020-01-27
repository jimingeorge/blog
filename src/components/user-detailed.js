import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UserDetailed extends React.Component{
    constructor(){
        super()
        this.state={
            user:{},
            posts:[]
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        console.log('userdetailed id'+id);
        
        
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=>{
            const userData=res.data
            
            
            this.setState({user:userData})
        })
        console.log('id '+id)
        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(res=>{
            const userData=res.data
            console.log(userData);
            
            this.setState({posts:userData})
        })
    }

    render(){
        return (
            <div>
                <h1>User Name:{this.state.user.name}</h1>
                <h3>Posts written by {this.state.user.name}</h3>
                <ul>
                   {this.state.posts.map(post=>{
                       return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                   })} 
                   
                </ul>
            </div>
        )
    }
}
export default UserDetailed