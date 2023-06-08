import { PeopleQuestionDetail, HelpAnswer } from './index.styles'
import PageHeader from '../PageHeader'
import { Avatar } from '@mantine/core'
interface Props {
  isUserLoggedIn: boolean
}

function Index ({ isUserLoggedIn }: Props) {
  return (
    <div className="pageDefaultStyle">
      <PageHeader pageName="User question" withCartIcon={true} />
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
  )
}

export default Index
