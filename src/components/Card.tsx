import React, {PropsWithChildren} from "react"

interface OwnProps {
  className?: string
}

type CardProps = PropsWithChildren<OwnProps>

const Card = ({
  children,
  className,
}: CardProps): JSX.Element => (
  <div
    className={`${
      className || ""
    } bg-surface shadow-xl border border-transparent dark:border-contrast-low p-8 iphone:p-2 rounded-xl`}
  >
    {children}
  </div>
)

export default Card
