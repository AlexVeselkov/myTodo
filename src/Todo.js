const Todo = ({ todoName, setTodos, todos }) => {
  const removeTodo = () => {
    setTodos(todos.filter((item) => item !== todoName));
  };

  return (
    <div>
      {todoName}
      <button onClick={() => removeTodo()}>Удалить</button>
    </div>
  );
};

export default Todo;
