import Button from "@/common/ui/button/Button";
import { Drawer } from "@/common/ui/drawer"
import Input from "@/common/ui/input/Input";
import Textarea from "@/common/ui/textarea/Textarea";
import { FormEvent, useEffect, useState } from "react";
import './style.scss';
import useCreateTrack from "@/common/hooks/api/tracking/useCreateTrack";

type CreateTrackModalProps = {
    open: boolean;
    onClose: () => void;
    date: Date;
}

type FormState = {
    description: string;
    reservedhours: number;
}

export const CreateTrackModal = ({ open, onClose, date }: CreateTrackModalProps) => {
    const defaultValue = { description: '', reservedhours: 0 };

    const [formValue, setFormValue] = useState<FormState>(defaultValue);
    const { isSuccess, mutate } = useCreateTrack();

    const handleChange = (type: string, val: string) => {
        setFormValue({ ...formValue, [type]: val });
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        mutate({ date, ...formValue })
    }

    useEffect(() => {
        if (isSuccess) {
            onClose();
        }
    }, [isSuccess]);

    useEffect(() => {
        if (open) {
            setFormValue(defaultValue);
        }
    }, [open]);

    return (
        <Drawer open={open} onClose={onClose}>
            <form className="create-track-form" onSubmit={handleSubmit}>
                <h2>Трекинг времени</h2>
                <Textarea value={formValue.description} onChange={(e) => handleChange('description', e.target.value)} />
                <Input value={formValue.reservedhours} onChange={(e) => handleChange('reservedhours', e.target.value)} />
                <Button>
                    Сохранить
                </Button>
            </form>
        </Drawer>
    )
}