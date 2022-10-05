import React, {Component} from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = props.post;
    }

    render() {
        return (
            <div>
                <h2>Post {this.state.id} of user {this.state.userId}</h2>
                <h3>{this.state.title}.</h3>
                <p>{this.state.body}.</p>
                <hr/>
            </div>
        );
    }
}

export {Post};