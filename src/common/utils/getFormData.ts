import { ITaskFormData } from "@/common/interfaces/form";

export function getFormData(): ITaskFormData {
    const formData = localStorage.getItem('create-form');
    
    if (formData == null) {
        return {
            title: '',
            description: '',
            board_id: null,
            priority: null,
            status: null,
            assignee_id: null,
        };
    } else {
        return JSON.parse(formData);
    }
}