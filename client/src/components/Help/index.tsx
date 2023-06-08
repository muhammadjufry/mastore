import { HelpBody, PeopleQuestions } from './index.styles'
import PageHeader from '../PageHeader'
import { Text, Input } from '@mantine/core'
import { SpotlightProvider, spotlight } from '@mantine/spotlight'
import type { SpotlightAction } from '@mantine/spotlight'
import {
  IconHome,
  IconDashboard,
  IconFileText,
  IconSearch
} from '@tabler/icons-react'
import { Link } from 'react-router-dom'

interface Props {}

function Help ({}: Props) {
  return (
    <div className="pageDefaultStyle">
      <PageHeader pageName="Help" withCartIcon={true} />
      <HelpBody>
        <h3>Need answer for question search here?</h3>
        <Input
          size="xs"
          placeholder="Search question here..."
          onClick={() => spotlight.open}
          readOnly
          icon={<IconSearch size={15} />}
          styles={() => ({
            input: {
              border: '0.0625rem solid #ced4da !important'
            }
          })}
        />
        <Text fw={600}>Some's people ask:</Text>
        <PeopleQuestions>
          <Link to="/user/help/question-detail/how-to-add-bank">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
          </Link>
          <Link to="/user/help/question-detail/how-to-add-bank">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
          </Link>
          <Link to="/user/help/question-detail/how-to-add-bank">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
          </Link>
          <Link to="/user/help/question-detail/how-to-add-bank">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
          </Link>
        </PeopleQuestions>
      </HelpBody>
    </div>
  )
}

const actions: SpotlightAction[] = [
  {
    title: 'Home',
    description: 'Get to home page',
    onTrigger: () => { console.log('Home') },
    icon: <IconHome size="1.2rem" />
  },
  {
    title: 'Dashboard',
    description: 'Get full information about current system status',
    onTrigger: () => { console.log('Dashboard') },
    icon: <IconDashboard size="1.2rem" />
  },
  {
    title: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onTrigger: () => { console.log('Documentation') },
    icon: <IconFileText size="1.2rem" />
  }
]

function index () {
  return (
    <SpotlightProvider
      actions={actions}
      searchIcon={<IconSearch size="1.2rem" />}
      searchPlaceholder="Search..."
      shortcut="mod + shift + 1"
      nothingFoundMessage="Nothing found..."
    >
      <Help />
    </SpotlightProvider>
  )
}

export default index
