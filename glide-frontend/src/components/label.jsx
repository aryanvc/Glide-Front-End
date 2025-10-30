import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import { forwardRef } from 'react'

export const Label = forwardRef(function Label({ className, ...props }, ref) {
  return (
    <Headless.Label
      ref={ref}
      {...props}
      className={clsx(
        className,
        'block text-sm/6 font-medium text-zinc-950 dark:text-white'
      )}
    />
  )
})
