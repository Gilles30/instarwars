import {
  Container,
  ButtonModal,
  Description,
  ImageCard,
  WrapImage,
  Title,
  Text,
} from './styles'
import { IStars } from '../../interfaces'

const CardMain = (props: IStars) => {
  const Click = () => {
    alert('Click')
  }

  return (
    <Container>
      <ButtonModal onClick={Click}>
        <WrapImage>
          <ImageCard src="/images/bg5.jpg" alt="background" />
        </WrapImage>
      </ButtonModal>
      <Description>
        <Title>{props.title}</Title>
        <Text>{props.mediaType}</Text>
        <Text>{props.categories}</Text>
        <Text>{props.price}</Text>
        <Text>{props.description}</Text>
        <Text>{props.year}</Text>
      </Description>
    </Container>
  )
}

export default CardMain
