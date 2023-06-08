import Header from '../components/HomePage/Header'
import Hero from '../components/HomePage/Hero'
import Categories from '../components/HomePage/Categories'
import MostPopularProducts from '../components/HomePage/MostPopularProducts'
import ProductLists from '../components/HomePage/ProductLists'
import Footer from '../components/Footer'

interface Props {
  isUserLoggedIn: boolean
}

const Data = [
  {
    title: 'Support',
    links: [
      {
        label: 'Help',
        link: ''
      },
      {
        label: 'Payment method',
        link: ''
      },
      {
        label: 'Contact us',
        link: ''
      }
    ]
  },
  {
    title: 'Find more',
    links: [
      {
        label: 'About us',
        link: ''
      },
      {
        label: 'Aggree & Terms',
        link: ''
      },
      {
        label: 'Privacy',
        link: ''
      }
    ]
  }
]

function HomePage ({ isUserLoggedIn }: Props) {
  return (
    <>
      <Header isUserLoggedIn={isUserLoggedIn} />
      <Hero />
      <Categories />
      <MostPopularProducts />
      <ProductLists />
      <Footer data={Data} />
    </>
  )
}

export default HomePage
