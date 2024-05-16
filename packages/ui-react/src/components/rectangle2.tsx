
import { cva, VariantProps } from 'class-variance-authority'

  const Rectangle2CVA = cva('rectangle 2', {
    variants: {}
  })
    

interface Rectangle2Props extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof Rectangle2CVA> {
  showText?: undefined
hello?: undefined
property1?: undefined
}

export const Rectangle2: React.FC<Rectangle2Props> = ({
  showText = true,
hello = 'test',
property1 = 'Default',
...rest
}) => {
  return <div className={Rectangle2CVA({ className, 0, 1 })}>
    {[object Object]}
  </div>
}

Rectangle2.displayName = 'Rectangle2'

  