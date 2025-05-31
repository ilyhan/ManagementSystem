import { priorityOptions, statusOptions } from "@/common/constants/optionLists";
import Button from "@/common/ui/button/Button";
import Input from "@/common/ui/input/Input";
import Select from "@/common/ui/select/Select";
import Textarea from "@/common/ui/textarea/Textarea";
import { FormEvent, useState } from "react";
import { ITaskFormData } from "@/common/interfaces/form";
import "@/common/components/taskForm/style.scss";

interface ITaskFormProps {
    initial: ITaskFormData;
}

const TaskForm = ({ initial }: ITaskFormProps) => {
    const [formData, setFormData] = useState<ITaskFormData>(initial);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

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
            <Select
                name="boardId"
                onChange={handleChange}
                value={formData.boardId ?? undefined}
                label="Проект"
                required
            />
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
                name="assigneeId"
                onChange={handleChange}
                value={formData.assigneeId ?? undefined}
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