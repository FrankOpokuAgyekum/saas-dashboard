import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

export function Button({
  className,
  variant = 'primary',
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2',
        variant === 'primary' &&
          'bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900',
        variant === 'secondary' &&
          'bg-slate-200 text-slate-900 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-100',
        className
      )}
      {...props}
    />
  )
}
