import styles from './styles/module_styles/page.module.css'
import dynamic from 'next/dynamic';
import Header from './components/Header'
import Banner from './components/Banner'
import Categories from './components/Categories';

export default function Home() {
  return (
    <>
    <Header />
    <main>
      <Banner />
      <Categories />
    </main>
    </>
  )
}
