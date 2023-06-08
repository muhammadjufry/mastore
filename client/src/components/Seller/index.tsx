import {
  SellerAccount,
  SellerAccountInfoTitle,
  SellerRatingAndSold,
  SellerRating,
  SellerFfling,
  IconEditButton,
  SellerDashboardLinks,
  SellerDashboardLink
} from './index.styles'
import PageHeader from '../PageHeader'
import { Link } from 'react-router-dom'
import { Avatar, Rating, Group } from '@mantine/core'

interface Props {}

function Index ({}: Props) {
  return (
    <>
      <PageHeader withCartIcon={false} />
      <div style={{ padding: '0 20px' }}>
        <div
          className="container pageDefaultStyle"
          style={{ padding: '20px 0' }}
        >
          <SellerAccount>
            <Avatar radius="xl" size={65} color="green">
              TQ
            </Avatar>
            <div>
              <SellerAccountInfoTitle>Seller Name</SellerAccountInfoTitle>
              <SellerRatingAndSold>
                <SellerRating>
                  <span>4.5</span>
                  <Group position="left">
                    <Rating value={4.5} fractions={2} size="xs" readOnly />
                  </Group>
                </SellerRating>
                <span className="productSold">
                  |&nbsp;154&nbsp;products&nbsp;sold
                </span>
              </SellerRatingAndSold>
              <SellerFfling>3K Followers | 100 Following</SellerFfling>
            </div>
            <IconEditButton size={18} />
          </SellerAccount>
          <SellerDashboardLinks>
            <SellerDashboardLink>
              <Link to="/seller/setting">Seller setting</Link>
            </SellerDashboardLink>
            <SellerDashboardLink>
              <Link to="/seller/edit-profile">Edit seller profile</Link>
            </SellerDashboardLink>
            <SellerDashboardLink>
              <Link to="/seller/products">Products</Link>
            </SellerDashboardLink>
            <SellerDashboardLink>
              <Link to="/seller/orders">Orders</Link>
            </SellerDashboardLink>
            <SellerDashboardLink>
              <Link to="/seller/payment">Payment configuration</Link>
            </SellerDashboardLink>
            <SellerDashboardLink>
              <Link to="/seller/ands">Add another dropship store</Link>
            </SellerDashboardLink>
            <SellerDashboardLink>
              <Link to="/seller/message">Message</Link>
            </SellerDashboardLink>
            <SellerDashboardLink>
              <Link to="/seller/become-seller">Delete seller account</Link>
            </SellerDashboardLink>
            <SellerDashboardLink>
              <Link to="/seller/help">Help</Link>
            </SellerDashboardLink>
            <SellerDashboardLink>
              <Link to="/seller/logout">Logout</Link>
            </SellerDashboardLink>
          </SellerDashboardLinks>
        </div>
      </div>
    </>
  )
}

export default Index
