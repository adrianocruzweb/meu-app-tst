function Form({setTodos}){
    const handleSubmit = (event)=>{
        event.preventDefault();
        const value = event.target.todo.value;
        const { v4: uuidv4 } = require('uuid');
        const randomUUID = uuidv4();

        setTodos((prevTodos)=>[
            ...prevTodos,
            {
                title: value,
                id: randomUUID,
                is_complete: false
            },
        ]);
        event.target.reset();
    }
    return(
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input type="text" name="todo" id="todo" placeholder="Write your next task"/>                
            </label>
            <button>
                <span className="visually-hidden">Submit</span>
                <svg>
                    <path d=""/>
                </svg>
            </button>
        </form>
    );
}

export default Form;