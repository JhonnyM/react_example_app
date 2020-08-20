import React, { Component } from 'react'

export default class Posts extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }
  // to wait for the app to load the data and fetch it before the app loads

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
    this.setState({
      posts: data
    })
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {
          this.state.posts.map(post => {
            return <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          })
        }
      </div>
    )
  }
}
