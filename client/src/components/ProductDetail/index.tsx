import Header from '../HomePage/Header'
import {
  ProductDetail,
  ProductInfo,
  RatingAndSold,
  ProductRating,
  ProductSold,
  ProductType,
  Buttons,
  Quantity,
  ProductDescription,
  SellerProfile,
  SellerInfo,
  ProductReview,
  ProductReviewHeader,
  ProductReviewRating,
  ProductReviewRate,
  ProductReviewMessages,
  ProductDetailHeader,
  ProductAddReview
} from './index.styles'
import Macbook from '../../assets/images/product-images/macbook.jpg'
import { useState, useRef } from 'react'
import {
  NumberInput,
  Group,
  ActionIcon,
  type NumberInputHandlers,
  rem,
  Rating,
  Button,
  Indicator,
  Avatar
} from '@mantine/core'
import { IconShoppingCartPlus } from '@tabler/icons-react'
import PageHeader from '../PageHeader'
import { Textarea } from '@mantine/core'
interface Props {
  isUserLoggedIn: boolean
}

function page ({ isUserLoggedIn }: Props) {
  const [value, setValue] = useState<number | ''>(0)
  const handlers = useRef<NumberInputHandlers>()
  return (
    <div style={{ backgroundColor: 'rgb(250, 250, 250)' }}>
      <PageHeader pageName="Product Detail" withCartIcon={true} />
      <div className="container">
        <ProductDetail>
          <img src={Macbook} alt="macbook image" />
          <ProductInfo>
            <h2>Macbook Pro M2 Max 32GB Ram 1TB Storage</h2>
            <RatingAndSold>
              <ProductRating>
                <span>4.2</span>
                <Rating value={4.4} fractions={4} readOnly />
              </ProductRating>
              <ProductSold>
                <span> | &nbsp;100 sold</span>
              </ProductSold>
            </RatingAndSold>
            <span className="price">$5,450</span>
            <ProductType>
              <li>
                <span>Color:</span>
                <Buttons>
                  <button>White</button>
                  <button>Silver</button>
                  <button>Black</button>
                </Buttons>
              </li>
              <li>
                <span>Color:</span>
                <Buttons>
                  <button>White</button>
                  <button>Silver</button>
                  <button>Black</button>
                </Buttons>
              </li>
            </ProductType>
            <Group spacing={10} mt={10} mb={10}>
              <span>Quantity:</span>
              <Quantity>
                <ActionIcon
                  size={42}
                  variant="default"
                  onClick={() => handlers.current?.decrement()}
                >
                  –
                </ActionIcon>
                <NumberInput
                  hideControls
                  value={value}
                  onChange={(val) => { setValue(val) }}
                  handlersRef={handlers}
                  max={10}
                  min={0}
                  step={1}
                  styles={{ input: { width: rem(54), textAlign: 'center' } }}
                />
                <ActionIcon
                  size={42}
                  variant="default"
                  onClick={() => handlers.current?.increment()}
                >
                  +
                </ActionIcon>
              </Quantity>
              <span>Stock left 10</span>
            </Group>
            <Button
              rightIcon={<IconShoppingCartPlus />}
              color="dark"
              styles={() => ({
                root: {
                  width: 'fit-content'
                }
              })}
            >
              Add to cart
            </Button>
          </ProductInfo>
        </ProductDetail>
        <ProductDescription>
          <SellerProfile>
            <Group>
              <Indicator>
                <Avatar color="cyan" size={55}>
                  MK
                </Avatar>
              </Indicator>
            </Group>
            <SellerInfo>
              <span className="sellerName">Seller Name</span>
              <div className="sellerRatingAndSold">
                <span>4.2</span>
                <Rating fractions={4} defaultValue={3.75} readOnly />
                <span>| 100 products sold</span>
              </div>
            </SellerInfo>
          </SellerProfile>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            nesciunt, iure quia aut perferendis officiis unde natus asperiores
            tenetur expedita dolor. Officiis corporis expedita nihil dolore rem
            ea id magnam molestias neque voluptate architecto enim asperiores,
            nulla minima assumenda, quae in voluptates vitae sequi magni nemo
            officia dicta temporibus at. Sit velit quia laboriosam quaerat
            blanditiis ipsum mollitia assumenda, accusantium, doloribus expedita
            possimus reiciendis ipsa libero aut adipisci beatae saepe itaque et
            vero eius tenetur, reprehenderit eum. Veritatis repellat tenetur
            rerum nesciunt unde iusto assumenda, eaque excepturi voluptatum
            sint. Perferendis nobis incidunt reiciendis debitis voluptates
            consequatur quod iusto eaque, aut itaque quibusdam perspiciatis
            aliquam iste ut nam praesentium in culpa minima dicta cum optio!
            Quaerat earum provident aut eaque illo modi blanditiis eos, beatae
            amet veritatis deleniti corrupti molestiae. Vel, id mollitia in
            dolorem distinctio tempora culpa labore modi laboriosam, earum
            officiis, quis laborum autem exercitationem alias nam consequatur
            fuga harum quaerat corporis pariatur ratione? Corporis reiciendis a
            voluptates omnis. Sit nisi esse, totam quod expedita nulla et quia
            quidem ipsa fugit alias ratione, sapiente debitis optio aliquid
            error tenetur ullam! Ducimus voluptatem suscipit nemo excepturi sed
            dolores. Modi dolore placeat ad magnam, harum debitis quae iusto
            numquam? Eveniet, fuga?
          </p>
        </ProductDescription>
        <ProductReview>
          <ProductReviewHeader>
            <ProductReviewRating>
              <svg
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mantine-1iabz2j mantine-Rating-icon"
              >
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
              </svg>
              <span className="productReviewTotalRatingNum">4.2</span>
            </ProductReviewRating>
            <ProductReviewRate>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mantine-1iabz2j mantine-Rating-icon"
                >
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                </svg>{' '}
                5 (1340)
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mantine-1iabz2j mantine-Rating-icon"
                >
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                </svg>{' '}
                4 (700)
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mantine-1iabz2j mantine-Rating-icon"
                >
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                </svg>{' '}
                3 (200)
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mantine-1iabz2j mantine-Rating-icon"
                >
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                </svg>{' '}
                2 (50)
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mantine-1iabz2j mantine-Rating-icon"
                >
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                </svg>{' '}
                1 (13)
              </li>
            </ProductReviewRate>
          </ProductReviewHeader>
          <ProductAddReview>
            <div className="userProfile">
              <Avatar color="cyan" size={40} radius="xl">
                AA
              </Avatar>
              <span className="userProfileName">Profile Name</span>
            </div>
            <Textarea
              placeholder="Add your review here..."
              label="Write your message:"
            />
            <Button
              styles={() => ({
                root: {
                  width: 'fit-content'
                }
              })}
            >
              Send
            </Button>
          </ProductAddReview>
          <ProductReviewMessages>
            <li>
              <div className="userReview">
                <Avatar color="cyan">AA</Avatar>
                <div className="userInfoAndCommentedDate">
                  <span className="userProfileName">Profile Name</span>
                  <span className="commentedDate">
                    Commented at: 12 Dec 2022
                  </span>
                </div>
              </div>
              <p className="reviewDescription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus neque culpa minima architecto! Deleniti iusto, ut
                saepe error perspiciatis mollitia ducimus id, laboriosam natus
                sunt praesentium nostrum consequatur corrupti debitis.
              </p>
            </li>
            <li>
              <div className="userReview">
                <Avatar color="cyan">AA</Avatar>
                <div className="userInfoAndCommentedDate">
                  <span className="userProfileName">Profile Name</span>
                  <span className="commentedDate">
                    Commented at: 12 Dec 2022
                  </span>
                </div>
              </div>
              <p className="reviewDescription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus neque culpa minima architecto! Deleniti iusto, ut
                saepe error perspiciatis mollitia ducimus id, laboriosam natus
                sunt praesentium nostrum consequatur corrupti debitis.
              </p>
            </li>
          </ProductReviewMessages>
        </ProductReview>
      </div>
    </div>
  )
}

export default page
