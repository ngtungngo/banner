import React from "react"

type OwnProps = Record<string, unknown> & {
  children: React.ReactNode
}

const Container = ({
  children,
  className,
  ...restProps
}: OwnProps): JSX.Element => (
  <div className={`mx-auto container px-4${className || ""} flex flex-col items-center w-full`} {...restProps}>
    {children}
  </div>
)

export default Container
