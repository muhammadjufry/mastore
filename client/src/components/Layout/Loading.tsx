import { LoadingScreen, Loader as LoaderComponent } from './loading.styles'
interface Props {}

function Loader ({}: Props) {
  return (
    <LoadingScreen>
      <LoaderComponent></LoaderComponent>
    </LoadingScreen>
  )
}

export default Loader
