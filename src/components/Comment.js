import React, {Component} from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = props.comment;
    }

    render() {
        return (
            <div>
                <h2>Comment {this.state.id} to post {this.state.postId}</h2>
                <h3>Name: {this.state.name}.</h3>
                <h3>Email: {this.state.email}</h3>
                <p>{this.state.body}.</p>
                <hr/>
            </div>
        );
    }
}

export {Comment};