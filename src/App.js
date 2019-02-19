import React, { Component } from 'react';
import TodoList from './components/TodoList.js';
import 'semantic-ui-css/semantic.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import indexReducer from './reducers';


const store = createStore(indexReducer);

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
	      <div className="App">
	        <TodoList value="" />
	      </div>
    	</Provider>
    );
  }
}

export default App;
