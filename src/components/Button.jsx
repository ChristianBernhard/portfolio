import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-stone-900 font-semibold text-stone-50 hover:bg-stone-800 active:bg-stone-900 active:text-stone-50/80 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white dark:active:bg-stone-100 dark:active:text-stone-900/80',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
}

export function Button({ variant = 'primary', className, ...props }) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-400 dark:focus-visible:outline-stone-500',
    variantStyles[variant],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
