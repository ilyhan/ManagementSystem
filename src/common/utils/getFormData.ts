import { ITaskFormData } from "@/common/interfaces/form";

export function getFormData(): ITaskFormData {
    const formData = localStorage.getItem('create-form');
    
    if (formData == null) {
        return {
            title: '',
            description: '',
            boardId: null,
            priority: null,
            status: null,
            assigneeId: null,
        };
    } else {
        return JSON.parse(formData);
    }
}