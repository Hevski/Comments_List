import React, {Component} from 'react';
import CommentsList from '../components/CommentsList';
class CommentBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        { id: 1, author: 'Louise', text: 'I love cheese'},
        { id: 2, author: 'Colin', text: 'When is hometime?'}
      ]
    }
  }
  render(){
    return (
      <div className="comment-box">
       <h2>Comments List</h2>
       <CommentsList data={this.state.data}/>
      </div>
    )
  }
}

export default CommentBox;
