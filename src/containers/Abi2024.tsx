import Container from "../components/Container"
import Card from "../components/Card"
import {PropsWithChildren} from "react"

const YourFamily = {
  shout: (text: string) => <p className="text-h1 iphone:text-h5 font-bold">{text}</p>,
}

const Title = ({
                 children,
               }: PropsWithChildren) => <p className="text-h5 iphone:text-body-1 font-bold">{children}</p>

const Content = ({
                   children,
                 }: PropsWithChildren) => <div className="flex flex-col items-start">{children}</div>

const Subtitle = ({
                    children,
                  }: PropsWithChildren) => <p className="py-4 iphone:pt-0 font-thin font-serif">{children}</p>

const Abi2024 = () => {
  return (
    <Container>
      <Card>
        <Content>
          <Title>Abi 2024</Title>
          {YourFamily.shout("KING")}
          <Subtitle>
            <p>The King is a fighting piece.Use it!</p>
            <p>Thiên Minh, du schaft es!</p>
          </Subtitle>
        </Content>
      </Card>
    </Container>
  )
}

export default Abi2024
