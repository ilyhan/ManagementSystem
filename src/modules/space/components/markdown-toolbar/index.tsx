import { RefObject } from 'react';
import '@/modules/space/components/markdown-toolbar/style.scss';

type Selection = {
    start: number;
    end: number;
};

type ApplyResult = {
    newValue: string;
    selectionStart: number;
    selectionEnd: number;
};

const wrapSelection = (value: string, sel: Selection, before: string, after: string, placeholder: string): ApplyResult => {
    const selected = value.slice(sel.start, sel.end) || placeholder;
    const newValue = value.slice(0, sel.start) + before + selected + after + value.slice(sel.end);
    const selectionStart = sel.start + before.length;
    const selectionEnd = selectionStart + selected.length;

    return { newValue, selectionStart, selectionEnd };
};

const prefixLines = (value: string, sel: Selection, prefix: string): ApplyResult => {
    const lineStart = value.lastIndexOf('\n', sel.start - 1) + 1;
    const nextBreak = value.indexOf('\n', sel.end);
    const lineEnd = nextBreak === -1 ? value.length : nextBreak;

    const block = value.slice(lineStart, lineEnd);
    const lines = block.split('\n').map((line) => prefix + line);
    const newBlock = lines.join('\n');

    const newValue = value.slice(0, lineStart) + newBlock + value.slice(lineEnd);
    const addedBefore = prefix.length;
    const addedTotal = prefix.length * lines.length;

    return {
        newValue,
        selectionStart: sel.start + addedBefore,
        selectionEnd: sel.end + addedTotal,
    };
};

type MarkdownAction = {
    label: string;
    title: string;
    apply: (value: string, sel: Selection) => ApplyResult;
    className?: string;
};

const actions: MarkdownAction[] = [
    { label: 'H1', title: 'Заголовок 1 уровня', apply: (v, s) => prefixLines(v, s, '# ') },
    { label: 'H2', title: 'Заголовок 2 уровня', apply: (v, s) => prefixLines(v, s, '## ') },
    { label: 'H3', title: 'Заголовок 3 уровня', apply: (v, s) => prefixLines(v, s, '### ') },
    { label: 'B', title: 'Жирный текст', className: 'markdown-toolbar__button_bold', apply: (v, s) => wrapSelection(v, s, '**', '**', 'жирный текст') },
    { label: 'I', title: 'Курсив', className: 'markdown-toolbar__button_italic', apply: (v, s) => wrapSelection(v, s, '*', '*', 'курсив') },
    { label: 'S', title: 'Зачёркнутый текст', className: 'markdown-toolbar__button_strike', apply: (v, s) => wrapSelection(v, s, '~~', '~~', 'зачёркнутый текст') },
    { label: '“ ”', title: 'Цитата', apply: (v, s) => prefixLines(v, s, '> ') },
    { label: '•', title: 'Маркированный список', apply: (v, s) => prefixLines(v, s, '- ') },
    { label: '1.', title: 'Нумерованный список', apply: (v, s) => prefixLines(v, s, '1. ') },
    { label: '<>', title: 'Код', apply: (v, s) => wrapSelection(v, s, '`', '`', 'код') },
    { label: '{ }', title: 'Блок кода', apply: (v, s) => wrapSelection(v, s, '```\n', '\n```', 'код') },
    { label: '🔗', title: 'Ссылка', apply: (v, s) => wrapSelection(v, s, '[', '](https://)', 'текст ссылки') },
];

interface IMarkdownToolbarProps {
    textareaRef: RefObject<HTMLTextAreaElement | null>;
    value: string;
    onChange: (value: string) => void;
}

export const MarkdownToolbar = ({ textareaRef, value, onChange }: IMarkdownToolbarProps) => {
    const handleAction = (action: MarkdownAction) => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        const sel: Selection = {
            start: textarea.selectionStart ?? value.length,
            end: textarea.selectionEnd ?? value.length,
        };

        const { newValue, selectionStart, selectionEnd } = action.apply(value, sel);

        onChange(newValue);

        requestAnimationFrame(() => {
            textarea.focus();
            textarea.setSelectionRange(selectionStart, selectionEnd);
        });
    };

    return (
        <div className="markdown-toolbar">
            {actions.map((action) => (
                <button
                    key={action.label}
                    type="button"
                    className={`markdown-toolbar__button ${action.className ?? ''}`}
                    title={action.title}
                    onClick={() => handleAction(action)}
                >
                    {action.label}
                </button>
            ))}
        </div>
    );
};
