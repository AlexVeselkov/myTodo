import { useState } from "react";

const InputTodo = ({ setTodos, todos }) => {
  const [value, setValue] = useState("");
  const [isShow, setIsShow] = useState(false);

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      setTodos([...todos, value]);
      setValue("");
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={value}
          placeholder="Введите текст..."
          onKeyDown={onKeyPress}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button
          onClick={() => {
            setTodos([...todos, value]);
            setValue("");
          }}
        >
          Сохранить
        </button>
        <button onClick={() => setTodos([])}>Очистить</button>
      </div>
      <div>
        <input
          type={isShow ? "text" : "password"}
          placeholder="Введите пароль..."
        ></input>
        <button onClick={() => setIsShow((prev) => !prev)}>
          Показать/Скрыть
        </button>
      </div>
    </div>
  );
};

export default InputTodo;
