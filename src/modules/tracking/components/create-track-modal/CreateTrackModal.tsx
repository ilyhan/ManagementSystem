import Button from '@/common/ui/button/Button';
import { Drawer } from '@/common/ui/drawer';
import Input from '@/common/ui/input/Input';
import Textarea from '@/common/ui/textarea/Textarea';
import { FormEvent, useEffect, useState } from 'react';
import './style.scss';
import useCreateTrack from '@/common/hooks/api/tracking/useCreateTrack';

type CreateTrackModalProps = {
  open: boolean;
  onClose: () => void;
  date: Date;
};

type FormState = {
  description: string;
  reservedhours: string;
};

const formatDateDisplay = (date: Date): string => {
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    weekday: 'short',
  });
};

export const CreateTrackModal = ({ open, onClose, date }: CreateTrackModalProps) => {
  const defaultValue: FormState = { description: '', reservedhours: '' };
  const [formValue, setFormValue] = useState<FormState>(defaultValue);
  const [errors, setErrors] = useState<{ description?: string; reservedhours?: string }>({});
  const { isSuccess, isPending, mutate } = useCreateTrack();

  const handleChange = (type: keyof FormState, val: string) => {
    setFormValue((prev) => ({ ...prev, [type]: val }));
    setErrors((prev) => ({ ...prev, [type]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: typeof errors = {};

    if (!formValue.description.trim()) {
      newErrors.description = 'Описание обязательно';
    }

    const hours = Number(formValue.reservedhours);
    if (!formValue.reservedhours || isNaN(hours) || hours <= 0) {
      newErrors.reservedhours = 'Укажите количество часов (больше 0)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    mutate({
      date,
      description: formValue.description.trim(),
      reservedhours: Number(formValue.reservedhours),
    });
  };

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (open) {
      setFormValue(defaultValue);
      setErrors({});
    }
  }, [open]);

  return (
    <Drawer open={open} onClose={onClose}>
      <form className="create-track-form" onSubmit={handleSubmit}>
        <h2 className="create-track-form__title">Трекинг времени</h2>
        <p className="create-track-form__date">{formatDateDisplay(date)}</p>

        <Textarea
          name="description"
          label="Описание"
          placeholder="Что делали?"
          value={formValue.description}
          onChange={(e) => handleChange('description', e.target.value)}
        />
        {errors.description && <p className="create-track-form__error">{errors.description}</p>}

        <Input
          name="reservedhours"
          label="Часы"
          type="number"
          min={0.25}
          step={0.25}
          inputMode="decimal"
          placeholder="Например: 2.5"
          value={formValue.reservedhours}
          onChange={(e) => handleChange('reservedhours', e.target.value)}
        />
        {errors.reservedhours && <p className="create-track-form__error">{errors.reservedhours}</p>}

        <Button type="submit" disabled={isPending}>
          {isPending ? 'Сохранение...' : 'Сохранить'}
        </Button>
      </form>
    </Drawer>
  );
};
