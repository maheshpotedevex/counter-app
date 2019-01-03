import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  renderTags() {
    if (this.state.tags.length === 0)
      return <p className="badge badge-danger">There are no tag!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        {this.state.tags.length === 0 && (
          <div>
            <p className="badge badge-danger">"Please create a new tag!"</p>
          </div>
        )}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
