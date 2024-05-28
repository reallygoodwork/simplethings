// Generated with Anthropocene
// 2024-05-28T13:50:38.429Z
// Do not modify this file directly. Instead, modify the source file and re-run the generator.

import React from 'react';
import { cva, cx, VariantProps } from 'class-variance-authority'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonCVA> {
  className?: string;
  showTrailingIcon: boolean;
  showLeadingIcon: boolean;
  buttonText: string;
  size: 'xs' | 'sm' | 'md' | 'xl' | 'lg';
  purpose: 'primary' | 'secondary' | 'soft' | 'link' | 'solid';
}

export const Button: React.FC<ButtonProps> = ({
  className = '',
  showTrailingIcon = false,
  showLeadingIcon = false,
  buttonText = `Button Text`,
  size = `xs`,
  purpose = `primary`,
}) => {
  return (
    <button className={ButtonCVA({showTrailingIcon, showLeadingIcon, size, purpose, className })}>
      <p className="">
        {buttonText}
      </p>
    </button>
  );
};

const ButtonCVA = cva('rounded-md', {
  variants: {
  "showTrailingIcon": {
    "true": "",
    "false": ""
  },
  "showLeadingIcon": {
    "true": "",
    "false": ""
  },
  "size": {
    "xs": "",
    "sm": "",
    "md": "",
    "xl": "",
    "lg": ""
  },
  "purpose": {
    "primary": "",
    "secondary": "",
    "soft": "",
    "link": "",
    "solid": ""
  }
},
  defaultVariants: {
  "size": "xs",
  "purpose": "primary"
},
  compoundVariants: [
  {
    "size": "xs",
    "purpose": "primary",
    "className": "rounded-md py-2.5 px-6 bg-[#e4f221]"
  },
  {
    "size": "sm",
    "purpose": "primary",
    "className": "rounded-md py-2.5 px-5 bg-[#e4f223]"
  },
  {
    "size": "md",
    "purpose": "primary",
    "className": "rounded-md py-3 px-5 bg-[#e4f223]"
  },
  {
    "size": "lg",
    "purpose": "primary",
    "className": "rounded-md py-4 px-5 bg-[#e4f223]"
  },
  {
    "size": "xl",
    "purpose": "primary",
    "className": "rounded-md py-4 px-5 bg-[#e4f223]"
  },
  {
    "size": "xs",
    "purpose": "secondary",
    "className": "rounded-md border border-[#f2f2f1] py-2.5 px-5 bg-white"
  },
  {
    "size": "sm",
    "purpose": "secondary",
    "className": "rounded-md border border-[#f2f2f1] py-2.5 px-5 bg-white"
  },
  {
    "size": "md",
    "purpose": "secondary",
    "className": "rounded-md border border-[#f2f2f1] py-3 px-5 bg-white"
  },
  {
    "size": "lg",
    "purpose": "secondary",
    "className": "rounded-md border border-[#f2f2f1] py-4 px-5 bg-white"
  },
  {
    "size": "xl",
    "purpose": "secondary",
    "className": "rounded-md border border-[#f2f2f1] py-4 px-5 bg-white"
  },
  {
    "size": "xs",
    "purpose": "soft",
    "className": "rounded-md py-2.5 px-5 bg-[#d7dfd3]"
  },
  {
    "size": "sm",
    "purpose": "soft",
    "className": "rounded-md py-2.5 px-5 bg-[#d7dfd3]"
  },
  {
    "size": "md",
    "purpose": "soft",
    "className": "rounded-md py-3 px-5 bg-[#d7dfd3]"
  },
  {
    "size": "lg",
    "purpose": "soft",
    "className": "rounded-md py-4 px-5 bg-[#d7dfd3]"
  },
  {
    "size": "xl",
    "purpose": "soft",
    "className": "rounded-md py-4 px-5 bg-[#d7dfd3]"
  },
  {
    "size": "xs",
    "purpose": "link",
    "className": "rounded-md py-1 px-0 bg-transparent"
  },
  {
    "size": "sm",
    "purpose": "link",
    "className": "rounded-md py-1 px-0 bg-transparent"
  },
  {
    "size": "md",
    "purpose": "link",
    "className": "rounded-md py-1 px-0 bg-transparent"
  },
  {
    "size": "lg",
    "purpose": "link",
    "className": "rounded-md py-1 px-0 bg-transparent"
  },
  {
    "size": "xl",
    "purpose": "link",
    "className": "rounded-md py-[0.3125rem] px-0 bg-transparent"
  },
  {
    "size": "xs",
    "purpose": "solid",
    "className": "rounded-md py-2.5 px-5 bg-[#17332d]"
  },
  {
    "size": "sm",
    "purpose": "solid",
    "className": "rounded-md py-2.5 px-5 bg-[#17332d]"
  },
  {
    "size": "md",
    "purpose": "solid",
    "className": "rounded-md py-3 px-5 bg-[#17332d]"
  },
  {
    "size": "lg",
    "purpose": "solid",
    "className": "rounded-md py-4 px-5 bg-[#17332d]"
  },
  {
    "size": "xl",
    "purpose": "solid",
    "className": "rounded-md py-4 px-5 bg-[#17332d]"
  }
]
})

