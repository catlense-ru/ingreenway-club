import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../components/MainLayout'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Index() {
  return(
    <MainLayout>
    
      <Head>
        <title>Главная / Ingreenway</title>
        <meta name="keywords" content="greenway,mygreenway,ingreenway,js,nextjs,catlense" />
        <meta name="description" content="Дестрибьютор Greenway" />
        <meta charSet="utf-8" />
      </Head>

    </MainLayout>
  )
}