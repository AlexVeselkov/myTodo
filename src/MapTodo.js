import Todo from "./Todo";

const MapTodo = ({ todos, setTodos }) => {
  return todos.map((item) => (
    <Todo todos={todos} setTodos={setTodos} todoName={item} />
  ));
};

export default MapTodo;


const a = {
	id: 1,
	name: 'aaaa',
	b: {
		id: 2
	}
}

a.b.id = 4;