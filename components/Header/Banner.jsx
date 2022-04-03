import { useEffect, useState } from 'react'
import s from './header.module.scss'
import {useRouter} from 'next/router'
import {mdiClose} from '@mdi/js'
import dynamic from 'next/dynamic'

const Icon = dynamic(
  () => import('@mdi/react'),
  {ssr: false}
)

const Banner = () => {

  const [visible, setVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setVisible(window.localStorage.flashVisible || true)
  }, [])

  const hideBanner = (e) => {
    setVisible(false)
    window.localStorage.flashVisible = false
    e.stopPropagation();
  }

  const endDate = new Date('2022-04-16 23:40:00')
  const days = endDate.getDate() 
  const hours = endDate.getHours()
  const minutes = endDate.getMinutes()
  const seconds = endDate.getSeconds()

  return(
    <div className={`${s.banner} ${visible === true ? s.bannerVisible : null}`} onClick={() => router.push('https://si.coral.club/?language=ru')}>
      <div className={s.container}>
        <div className={s.content}>
          <p className={s.text}>Весенние предложения</p>
          <div className={s.timer}>
            <p>осталось {days} {days[days.length - 1] == 1 ? 'день' : (days[days.length - 1] == 2 || days[days.length - 1] == 3 || days[days.length - 1] == 4) ? 'дня' : 'дней'}</p>
            <div className={s.square}>{hours}</div>
            <div className={s.square}>{minutes}</div>
            <div className={s.square}>{seconds}</div>
          </div>
        </div>
        <Icon path={mdiClose} title="User profile" size={1.05} color="#fff" onClick={hideBanner} className={s.closeBtn} />
      </div>
    </div>
  )
}

export default Banner