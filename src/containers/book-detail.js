import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started, man!</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.book.title}</div>
        <div>{this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook // grep from Application State
  };
}

export default connect(mapStateToProps)(BookDetail);
