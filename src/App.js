import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Movie 1",
      },
    ],
  };

  handleAdd = () => {
    console.log("Add");

    const lastIndex = this.state.posts.length + 1;
    console.log(lastIndex);

    const post = {
      id: lastIndex,
      title: "Avengers",
    };

    const posts = [...this.state.posts, post];

    this.setState({ posts });
  };

  handleUpdate = (post) => {
    console.log("Update", post);

    const updateIndex = this.state.posts.indexOf(post);
    console.log("Update Index", updateIndex);

    let posts = this.state.posts;

    posts[updateIndex].title = "Hello!";

    this.setState({ posts });
    // const updatedPost = this.state.posts.filter(p => post.id === p.id)

    // this.setState({ filteredPosts: posts });
  };

  handleDelete = (post) => {
    const filteredPosts = this.state.posts.filter((p) => {
      return p.id !== post.id;
    });

    this.setState({ posts: filteredPosts });

    console.log("Delete", post);
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-dark btn-block" onClick={this.handleAdd}>
          Add Movie
        </button>
        <br></br>
        <br></br>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
