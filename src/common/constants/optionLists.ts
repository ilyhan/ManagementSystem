import { IOption } from "@/common/interfaces/form";
import { EPriority, EStatus, } from "@/common/interfaces/task";

export const priorityOptions: IOption[] = Object.values(EPriority).map(
    priority => ({
        title: priority,
        value: priority,
    })
);

export const statusOptions: IOption[] = Object.values(EStatus).map(
    priority => ({
        title: priority,
        value: priority,
    })
);