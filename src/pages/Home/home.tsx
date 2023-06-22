import './home.css'
import Header from '../../components/header/header.tsx'
import TodoList from '../../components/todoList/todoList.tsx'
import Button from '../../components/button/button.tsx';


export default function Home(){
return(
    <div>
       <Header/> 
       <TodoList/>
       <Button/>
    </div>
);
}