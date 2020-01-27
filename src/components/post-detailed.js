import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class PostDetailed extends React.Component{
    constructor(){
        super()
        this.state={
            post:{},
            comments:[],
            users:{}
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
        console.log(id);
        
        axios.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
        .then(res=>{
            {axios.get('http://jsonplaceholder.typicode.com/users')
            .then(res=>{
                const data = res.data
                const user = data.find(user=>{
                    return user.id===this.state.post.userId
                })
                this.setState({users:user})
                console.log(this.state.users);
            })
            .catch(err=>alert(err))}

            const data = res.data[0]
            //console.log(data);
            
            this.setState({post:data})            
        })
        .catch(err=>alert(err))

        axios.get(`http://jsonplaceholder.typicode.com/posts/1/comments?postId=${id}`)
        .then(res=>{
            const data = res.data
            //console.log(data);
            
            this.setState({comments:data})            
        })
        .catch(err=>alert(err))

        
        
    }
    render(){
        return(
            <div>
                <h1>User Name:{this.state.users.name}</h1>
                
                <h1>Title: {this.state.post.title}</h1>
                <h2>Body:</h2>
                <h3>{this.state.post.body}</h3>
                <hr/>
                <h2>Comments: </h2>
                <ul>
                    {this.state.comments.map(comment=>{
                        return <li key={comment.id}>{comment.body}</li>
                    })}
                </ul>
                <hr/>
                <h4><Link to={`/users/${this.state.users.id}`}>More posts from {this.state.users.name}</Link></h4>
            </div>
        )
    }
}
export default PostDetailed