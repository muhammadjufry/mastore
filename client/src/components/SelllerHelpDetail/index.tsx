import { PeopleQuestionDetail, HelpAnswer } from './index.styles'
import SellerPageHeader from '../SellerPageHeader'
import { Avatar } from '@mantine/core'
interface Props {
  isUserLoggedIn: boolean
}

function Index ({ isUserLoggedIn }: Props) {
  return (
    <>
      <SellerPageHeader pageName="User question" />
      <div className="pageDefaultStyle">
        <div className="container">
          <PeopleQuestionDetail>
            <h4>How to add my bank to MA STORE?</h4>
            <HelpAnswer>
              <span className="useranswered">
                <Avatar size="sm" radius="xl" />
                Answered by: Taq-202
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                excepturi labore? Cupiditate atque mollitia laudantium molestiae
                architecto deleniti aspernatur ea optio tenetur quisquam. Error
                neque expedita alias quae sunt! Explicabo?
              </p>
            </HelpAnswer>
          </PeopleQuestionDetail>
        </div>
      </div>
    </>
  )
}

export default Index
