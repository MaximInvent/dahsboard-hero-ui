import { cva } from "class-variance-authority";

export const statusChip = cva("font-medium text-xs px-2 py-1 rounded-full", {
  variants: {
    tone: {
      active: "bg-green-100 text-green-800",
      review: "bg-yellow-100 text-yellow-800",
      draft: "bg-blue-100 text-blue-800"
    }
  },
  defaultVariants: {
    tone: "active"
  }
});


