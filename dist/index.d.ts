import { MouseEventHandler, FC } from 'react';

interface SoftButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const SoftButton: FC<SoftButtonProps>;

export { SoftButton };
