import { ITaskFormData } from "@/common/interfaces/form";

export function getFormData(
    defaultData?: Partial<ITaskFormData>
): ITaskFormData {
    const data = {
        title: '',
        description: '',
        board_id: null,
        priority: null,
        status: null,
        assignee_id: null,
    }
    return {
        ...data,
        ...defaultData,
    };
}