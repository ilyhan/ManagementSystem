import { priorityOptions, statusOptions } from "@/common/constants/optionLists";
import Button from "@/common/ui/button/Button";
import Input from "@/common/ui/input/Input";
import Select from "@/common/ui/select/Select";
import Textarea from "@/common/ui/textarea/Textarea";
import { FormEvent, useEffect, useState } from "react";
import { IOption, ITaskFormData } from "@/common/interfaces/form";
import "@/common/components/taskForm/style.scss";
import useGetAllBoards from "@/common/hooks/useGetAllBoards";
import useGetUsers from "@/common/hooks/useGetUsers";
import { saveFormData } from "@/common/utils/saveFormData";

interface ITaskFormProps {
    onSubmit: (_: ITaskFormData) => void;
    initial: ITaskFormData;
    mode?: 'create' | 'update';
}

const TaskForm = ({ onSubmit, initial, mode = 'create' }: ITaskFormProps) => {
    const [formData, setFormData] = useState<ITaskFormData>(initial);
    const [boards, setBoards] = useState<IOption[]>([]);
    const [assignee, setAssignee] = useState<IOption[]>([]);

    const { data: boardsData } = useGetAllBoards();
    const { data: assigneeData } = useGetUsers();

    useEffect(() => {
        if (mode == 'create') {
            saveFormData(formData);
        }
    }, [formData]);

    useEffect(() => {
        if (boardsData) {
            setBoards(boardsData.map(item => ({ value: item.id, title: item.name })));
        }
    }, [boardsData]);

    useEffect(() => {
        if (assigneeData) {
            setAssignee(assigneeData.map(item => ({ value: item.id, title: item.fullName })));
        }
    }, [assigneeData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    console.log(formData);

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <Input
                name="title"
                onChange={handleChange}
                value={formData.title}
                label="Название"
                required
            />
            <Textarea
                name="description"
                onChange={handleChange}
                value={formData.description}
                label="Описание"
                required
            />
            {mode !== 'update' &&
                <Select
                    name="board_id"
                    onChange={handleChange}
                    options={boards}
                    value={formData.board_id ?? undefined}
                    label="Проект"
                    required
                />
            }
            <Select
                name="priority"
                onChange={handleChange}
                options={priorityOptions}
                value={formData.priority ?? undefined}
                label="Приоритет"
                required
            />
            <Select
                name="status"
                onChange={handleChange}
                options={statusOptions}
                value={formData.status ?? undefined}
                label="Статус"
                required
            />
            <Select
                name="assignee_id"
                onChange={handleChange}
                value={formData.assignee_id ?? undefined}
                options={assignee}
                label="Исполнитель"
                required
            />

            <Button className="task-form__button">
                Сохранить
            </Button>
        </form>
    )
};

export default TaskForm;