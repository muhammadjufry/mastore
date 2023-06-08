import { useNavigate } from 'react-router-dom'
import { Indicator, Avatar, Group } from '@mantine/core'
import { SellerPageHeader, SellerPageHeaderIcon } from './index.styles'
import Header from '../HomePage/Header'

interface Props {
  pageName: string
  sellerImg?: string
}

function Index ({ pageName, sellerImg }: Props) {
  const navigate = useNavigate()
  return (
    <div className="header">
      <SellerPageHeader className="pageHeader">
        <SellerPageHeaderIcon onClick={() => { navigate(-1) }} />
        <span>{pageName}</span>
        <Group position="left">
          <Indicator color="teal">
            <Avatar
              radius="xl"
              src={sellerImg}
              color="green"
              styles={() => ({
                root: {
                  cursor: 'pointer'
                }
              })}
            >
              TQ
            </Avatar>
          </Indicator>
        </Group>
      </SellerPageHeader>
      <Header />
    </div>
  )
}

export default Index
