import { clsx } from 'clsx'
import type { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  size?: 'default' | 'icon' | 'icon-sm'
}

export function Button({ size = 'default', className, ...props }: ButtonProps) {
  const sizeClasses = {
    default: 'btn-default',
    icon: 'btn-icon',
    'icon-sm': 'btn-icon-sm'
  }

  return <button className={clsx('btn-base', sizeClasses[size], className)} {...props} />
}
