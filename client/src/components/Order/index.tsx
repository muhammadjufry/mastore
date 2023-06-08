import {
  OrderItems,
  OrderItemsLi,
  OrderItemTitle,
  OrderItemVariants,
  OrderItemPrice
} from './index.styles'
import LaptopImg from '../../assets/images/product-images/laptop.webp'
import MacbookImg from '../../assets/images/product-images/macbook.webp'
import HeadsetImg from '../../assets/images/product-images/headset.png'
import { Tabs } from '@mantine/core'
import PageHeader from '../PageHeader'
import { Link } from 'react-router-dom'
interface Props {}

function Index ({}: Props) {
  return (
    <>
      <PageHeader pageName="Order" withCartIcon={true} />
      <div style={{ padding: '0 10px' }}>
        <div
          className="container pageDefaultStyle"
          style={{ padding: '20px 0' }}
        >
          <Tabs
            defaultValue="first"
            styles={() => ({
              tabsList: {
                flexWrap: 'nowrap'
              },
              tab: {
                whiteSpace: 'normal'
              },
              tabLabel: {
                textAlign: 'center',
                lineHeight: '19px',
                fontSize: '12px'
              }
            })}
          >
            <Tabs.List grow>
              <Tabs.Tab value="first">Ordered Item</Tabs.Tab>
              <Tabs.Tab value="second">Still packing</Tabs.Tab>
              <Tabs.Tab value="third">On Delivery</Tabs.Tab>
              <Tabs.Tab value="fourth">Pass order</Tabs.Tab>
            </Tabs.List>
          </Tabs>
          <OrderItems>
            <Link to="/user/order/order-detail/macbook">
              <OrderItemsLi>
                <div className="left">
                  <img src={MacbookImg} alt="" />
                </div>
                <div className="center">
                  <OrderItemTitle>Headset</OrderItemTitle>
                  <div>
                    <OrderItemVariants className="orderItemVariants">
                      Variants: Pink
                    </OrderItemVariants>
                    <OrderItemPrice className="orderItemPrice">
                      $100
                    </OrderItemPrice>
                  </div>
                </div>
                <div className="right">
                  <span className="itemLength">1 (Item)</span>
                  <button>Order&nbsp;again</button>
                </div>
              </OrderItemsLi>
            </Link>
            <Link to="/user/order/order-detail/macbook">
              <OrderItemsLi>
                <div className="left">
                  <img src={MacbookImg} alt="" />
                </div>
                <div className="center">
                  <OrderItemTitle>Headset</OrderItemTitle>
                  <div>
                    <OrderItemVariants className="orderItemVariants">
                      Variants: Pink
                    </OrderItemVariants>
                    <OrderItemPrice className="orderItemPrice">
                      $100
                    </OrderItemPrice>
                  </div>
                </div>
                <div className="right">
                  <span className="itemLength">1 (Item)</span>
                  <button>Order&nbsp;again</button>
                </div>
              </OrderItemsLi>
            </Link>
            <Link to="/user/order/order-detail/macbook">
              <OrderItemsLi>
                <div className="left">
                  <img src={HeadsetImg} alt="" />
                </div>
                <div className="center">
                  <OrderItemTitle>Headset</OrderItemTitle>
                  <div>
                    <OrderItemVariants className="orderItemVariants">
                      Variants: Pink
                    </OrderItemVariants>
                    <OrderItemPrice className="orderItemPrice">
                      $100
                    </OrderItemPrice>
                  </div>
                </div>
                <div className="right">
                  <span className="itemLength">1 (Item)</span>
                  <button>Order&nbsp;again</button>
                </div>
              </OrderItemsLi>
            </Link>
          </OrderItems>
        </div>
      </div>
    </>
  )
}

export default Index
