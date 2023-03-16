import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
axios.get(url).then(res => {
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed)
})
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  Todo with id: ${id}
  Has a title: ${title}
  Is it finished? ${completed}
`)
}

http://api.openweathermap.org/data/2.5/weather?lat=21.5194&lon=-104.9297&appid=11aa90a392ece6a8fcbd795a5c7280b2
