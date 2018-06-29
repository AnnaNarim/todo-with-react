import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: [],
			value: '',
			is_add: true,
			curr_index: -1
		}
	}
	add() {
		const list = this.state.todos;
		list.push(this.state.value);
		this.setState({ todos: list, value: '' });
	}
	inputChange(event) {
		this.setState({value: event.target.value})
	}
	edit(index) {
		this.setState({is_add: false, curr_index: index})
		this.setState({value: this.state.todos[index]})
	}
	update() {
		const list = this.state.todos;
		list[this.state.curr_index] = this.state.value;
		this.setState({ todos: list, value: '', curr_index: -1, is_add: true});
	}
	deleteTodo(id) {
		const list = this.state.todos
		delete list[id];
		list.splice(id, 1);
		this.setState({todos:list})
	}
 	render() {
   	const {value, is_add} = this.state;
   		const lis = this.state.todos.map((item, index)=>{
   			return (
	   				<li id={index}>
							{item}
							<button onClick={() => this.edit(index)}> Edit </button>
							<button onClick={() => this.deleteTodo(index)}> Delete </button>
						</li>
   			);
   		})
    	return (
			<div>
				<input type='text' id='addInput' value={value} onChange={this.inputChange.bind(this)} />
				<button onClick={is_add ? () => this.add() :() => this.update() } > { is_add ? 'Add' : 'Update'} </button>
				<br />
				<ul>{lis}</ul>
			</div>
	    );
 	}
}
export default App;
