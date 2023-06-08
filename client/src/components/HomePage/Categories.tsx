import {
  createStyles,
  Card,
  Text,
  UnstyledButton,
  Group,
  rem
} from '@mantine/core'
import {
  IconBriefcase,
  IconCamera,
  IconShirtSport,
  IconDeviceDesktop,
  IconCpu,
  IconBrandXbox,
  IconDeviceLaptop,
  IconShoe,
  IconPaint,
  IconDeviceMobile,
  IconPrinter,
  IconArmchair2,
  IconBallBasketball,
  IconNotebook,
  IconWashMachine,
  IconDeviceWatchStats2
} from '@tabler/icons-react'
import { SimpleGrid } from './categories.styles'
interface Props {}

const mockdata = [
  { title: 'Bag', icon: IconBriefcase },
  { title: 'Camera', icon: IconCamera },
  { title: 'Clothes', icon: IconShirtSport },
  { title: 'Computer', icon: IconDeviceDesktop },
  { title: 'Hardware', icon: IconCpu },
  { title: 'Gaming', icon: IconBrandXbox },
  { title: 'Laptop', icon: IconDeviceLaptop },
  { title: 'Shoes', icon: IconShoe },
  { title: 'Paint Toool', icon: IconPaint },
  { title: 'Mobile', icon: IconDeviceMobile },
  { title: 'Printer', icon: IconPrinter },
  { title: 'Sofa', icon: IconArmchair2 },
  { title: 'Sports Tool', icon: IconBallBasketball },
  { title: 'Study Tool', icon: IconNotebook },
  { title: 'Wash Machice', icon: IconWashMachine },
  { title: 'Watch', icon: IconDeviceWatchStats2 }
]

const useStyles = createStyles((theme) => ({
  card: {
    border: 'none !important',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    marginBottom: '20px'
  },

  title: {
    fontFamily: `Poppins, ${theme.fontFamily}`,
    fontWeight: 700
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: rem(90),
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.05)'
    }
  }
}))

function Categories ({}: Props) {
  const { classes } = useStyles()

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon color="black" size="2rem" />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ))
  return (
    <Card withBorder radius="md" className={classes.card} py={40}>
      <div className="container">
        <Group position="apart">
          <Text className={classes.title}>Categories</Text>
        </Group>
        <SimpleGrid cols={4} mt="md">
          {items}
        </SimpleGrid>
      </div>
    </Card>
  )
}

export default Categories
