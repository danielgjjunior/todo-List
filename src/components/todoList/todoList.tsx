import './todo.css'

export default function TodoList(){

  return (
    <div className="todo-list">
        <div className="searchBar">
          
            <img src="../../src/assets/img/burguer.png" alt="Ícone" className="icon"/>
              <input type="text" placeholder="Pesquisar" className="search" />
            <img src="../../src/assets/img/search.png" alt="Search" className="icon2"/>
          
        </div>
          
            
      <ul>
        <li>
          <div className="dot"></div> 
          Tarefa 1 
        </li>

        <li>
          <div className="dot"></div> 
          Tarefa 1 
        </li>

        <li>
          <div className="dot"></div> 
          Tarefa 2 
        </li>

        <li>
          <div className="dot"></div> 
          Tarefa 2 
        </li>

        <li>
          <div className="dot"></div> 
          Tarefa 2 
        </li>

        <li>
          <div className="dot"></div> 
          Tarefa 2 
        </li>

        <li>
          <div className="dot"></div> 
          Tarefa 2 
        </li>

        <li>
          <div className="dot"></div> 
          Tarefa 2 
        </li>
        
        {/* adicione mais tarefas aqui */}
      </ul>
      
    </div>
  );
}
