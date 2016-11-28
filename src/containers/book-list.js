import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks, selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {

    componentWillMount() {
      this.props.getBooks();
    }

    renderList() {
        return this.props.books.map( (book) => { return(
                <li
                    key={book.title}
                    onClick={ () => this.props.selectBook(book) }
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
          <div>
            <ul className="list-group col-sm-4">
                { this.renderList() }
            </ul>
          </div>
        );
    }
}

function mapStateToProps (state) {
    //whatever is returned here will be retrieved as this.props in the BookList container
    return {
        books: state.books
    }

}

//selectBook will be a prop of the component BookList
function mapDispatchToProps (dispatch) {
    //whenever you call selectBook(), dispatch (transport) the results to all the reducers
    return bindActionCreators({ getBooks: getBooks, selectBook: selectBook }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
