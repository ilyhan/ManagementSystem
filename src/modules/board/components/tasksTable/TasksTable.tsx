import "@/modules/board/components/tasksTable/style.scss";
import Column from "@/modules/board/components/column/Column";
import { EPriority } from "@/common/interfaces/task";

const TasksTable = () => {
    const initialTasks = [
        {
            id: 1,
            title: 'Создать дизайн',
            description: 'Дизайн главной страницы',
            status: 'todo',
            priority: EPriority.LOW,
        },
        {
            id: 3,
            title: 'Создать дизайн',
            description: 'Дизайн главной страницы',
            status: 'todo',
            priority: EPriority.LOW,
        },
        {
            id: 2,
            title: 'Реализовать API',
            description: 'Написать эндпоинты для задач',
            status: 'in-progress',
            priority: EPriority.HIGH,
        },
        {
            id: 3,
            title: 'Протестировать',
            description: 'Написать unit-тесты',
            status: 'done',
            priority: EPriority.MEDIUM
        }
    ];

    const initialColumns = [
        {
            id: 'todo',
            title: 'To Do',
            tasks: initialTasks.filter(task => task.status === 'todo')
        },
        {
            id: 'in-progress',
            title: 'In Progress',
            tasks: initialTasks.filter(task => task.status === 'in-progress')
        },
        {
            id: 'done',
            title: 'Done',
            tasks: initialTasks.filter(task => task.status === 'done')
        }
    ];

    return (
        <div className="tasks-table">
            {initialColumns.map((clm) => (
                <Column
                    key={clm.id}
                    title={clm.title}
                    tasks={clm.tasks}
                />
            ))}
        </div>
    )
}

export default TasksTable;