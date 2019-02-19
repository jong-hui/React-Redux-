import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../actions';
import { Header, Button } from 'semantic-ui-react';


class TodoListFooter extends Component {
	render () {

		return (
			<div>
				<Header as="h1">{this.props.number}</Header>
				<Button onClick={() => {this.props.other()}} content="test" />
			</div>
		)
	}
}

const mapStateToProps = ( { other } ) => {
	return {
		number : other
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		other: _ => dispatch(Actions.other(_)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListFooter);