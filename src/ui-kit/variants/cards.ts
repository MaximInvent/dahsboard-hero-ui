import { cva } from "class-variance-authority";

// Определяем базовый стиль и варианты для карточек
export const cardVariants = cva(
    "border-0 bg-white shadow-md rounded-lg overflow-hidden",
    {
        variants: {
            variant: {
                default: "bg-white",
                gray: "bg-gray-50",
                primary: "bg-blue-50",
                success: "bg-green-50",
                warning: "bg-yellow-50",
                danger: "bg-red-50",
            },
            shadow: {
                none: "shadow-none",
                sm: "shadow-sm",
                md: "shadow-md",
                lg: "shadow-lg",
                xl: "shadow-xl",
            },
            border: {
                none: "border-0",
                sm: "border border-gray-200",
                md: "border border-gray-300",
                lg: "border-2 border-gray-300",
            },
            rounded: {
                none: "rounded-none",
                sm: "rounded-sm",
                md: "rounded-md",
                lg: "rounded-lg",
                xl: "rounded-xl",
                "2xl": "rounded-2xl",
            }
        },
        defaultVariants: {
            variant: "default",
            shadow: "md",
            border: "none",
            rounded: "lg",
        },
    }
);

// Предустановленные варианты карточек
export const defaultCard = cardVariants();

// Варианты для заголовков карточек
export const cardHeaderVariants = cva(
    "pb-4 px-6 pt-6",
    {
        variants: {
            size: {
                sm: "pb-3 px-4 pt-4",
                md: "pb-4 px-6 pt-6",
                lg: "pb-6 px-8 pt-8",
            }
        },
        defaultVariants: {
            size: "md",
        },
    }
);

// Варианты для тела карточки
export const cardBodyVariants = cva(
    "pt-0 px-6 pb-6",
    {
        variants: {
            size: {
                sm: "pt-0 px-4 pb-4",
                md: "pt-0 px-6 pb-6",
                lg: "pt-0 px-8 pb-8",
            }
        },
        defaultVariants: {
            size: "md",
        },
    }
);

// Предустановленные варианты для заголовков и тел
export const defaultCardHeader = cardHeaderVariants();
export const defaultCardBody = cardBodyVariants();
