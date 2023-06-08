import styled from 'styled-components'
import { SimpleGrid as SimpleGridBox } from '@mantine/core'

export const SimpleGrid = styled(SimpleGridBox)`
  @media (min-width: 568px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
  }
`
