function TODOHero({todo_complete, total_todos}){
    return (
        <section>
            <div>
                <p>Task Done</p>
                <p>Keep it UP</p>
            </div>
            <div>
                {todo_complete}/{total_todos}
            </div>
        </section>
    );
}

export default TODOHero;