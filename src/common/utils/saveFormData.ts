import { ITaskFormData } from "@/common/interfaces/form";

export function saveFormData(data: ITaskFormData) {
    localStorage.setItem('create-form', JSON.stringify(data));
}