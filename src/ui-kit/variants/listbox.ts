import { cva } from "class-variance-authority";

export const listboxBase = cva("space-y-4", {
  variants: {},
  defaultVariants: {}
});

export const listboxList = cva("flex flex-col gap-4", {
  variants: {},
  defaultVariants: {}
});

export const listboxItem = cva(
  "p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-all duration-200",
  {
    variants: {},
    defaultVariants: {}
  }
);

export const listboxItemTitle = cva("text-sm font-semibold text-gray-900 mb-1");
export const listboxItemDescription = cva("text-sm text-gray-600");

export const DefaultListBoxItem = {
    base: listboxItem(),
    title: listboxItemTitle(),
    description: listboxItemDescription()
}

export const DefaultListBox = {
    base: listboxBase(),
    list: listboxList()
}

