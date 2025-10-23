import { cva } from "class-variance-authority";

// Определяем базовый стиль и варианты
export const buttonVariants = cva(
    "rounded-lg font-semibold transition-all shadow-sm",
    {
      variants: {
        variant: {
          primary: "bg-indigo-600 text-white hover:bg-indigo-700",
          secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
          outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
          ghost: "text-gray-600 hover:bg-gray-100 bg-transparent border-0",
          purple: "bg-quick-purple text-white hover:opacity-90",
          teal: "border bg-transparent border-quick-teal text-quick-teal hover:bg-[color-mix(in oklab,var(--color-quick-teal) 10%,transparent)]",
        },
        size: {
          sm: "px-3 py-1 text-sm",
          md: "px-4 py-2",
          lg: "px-6 py-3 text-lg",
        },
        fullWidth: {
          true: "w-full justify-start",
          false: "",
        },
      },
      defaultVariants: {
        variant: "primary",
        size: "md",
        fullWidth: false,
      },
    }
);

export const smallGhostButton = buttonVariants({ size: "sm", variant: "ghost" });
export const bigPurpleButton = buttonVariants({ size: "lg", variant: "purple" });
export const fullWidthPurpleButton = buttonVariants({ variant: "purple", fullWidth: true });
export const fullWidthTealButton = buttonVariants({ variant: "teal", fullWidth: true });
