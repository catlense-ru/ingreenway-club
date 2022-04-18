import { useEffect, useState, useRef } from 'react'
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
  const [time, setTime] = useState(0)
  const router = useRouter()

  useEffect(() => {
    setVisible(window.localStorage.flashVisible || true)
  }, [])

  const hideBanner = (e) => {
    setVisible(false)
    window.localStorage.flashVisible = false
    e.stopPropagation();
  }

  let endDate = new Date('2022-04-30 00:00:00')
  let days = endDate.getDate() - new Date().getDate()
  let hours = endDate.getHours() - new Date().getHours() + 24
  let minutes = endDate.getMinutes() - new Date().getMinutes() + 60
  let seconds = endDate.getSeconds() - new Date().getSeconds() + 60

  if(days.toString().length == 1) days = `0${days}`
  if(hours.toString().length == 1 || hours.toString() == `0${hours}`) hours = `0${hours}`
  if(minutes.toString().length == 1 || minutes.toString() == `0${hours}`) minutes = `0${minutes}`
  if(seconds.toString().length == 1 || seconds.toString() == `0${hours}`) seconds = `0${seconds}`

  setInterval(() => {
    setTime(new Date())
  }, 1000)

  useEffect(() => {
    days = endDate.getDate() - new Date().getDate()
    hours = endDate.getHours() - new Date().getHours() + 24
    minutes = endDate.getMinutes() - new Date().getMinutes() + 60
    seconds = endDate.getSeconds() - new Date().getSeconds() + 60

    if(days.toString().length == 1) days = `0${days}`
    if(hours.toString().length == 1 || hours.toString() == `0${hours}`) hours = `0${hours}`
    if(minutes.toString().length == 1 || minutes.toString() == `0${hours}`) minutes = `0${minutes}`
    if(seconds.toString().length == 1 || seconds.toString() == `0${hours}`) seconds = `0${seconds}`

    console.log(time)
  }, [time])

  return(
    <div className={`${s.banner} ${visible === true ? s.bannerVisible : null}`} onClick={() => router.push('https://si.coral.club/?language=ru')}>
      <div className={s.container}>
        <div className={s.content}>
          <p className={s.text}>Весенние предложения</p>
          <div className={s.timer}>
            <p>осталось {days} {days == 1 ? 'день' : (days[days.length - 1] == 2 || days[days.length - 1] == 3 || days[days.length - 1] == 4) ? 'дня' : (days == 2 || days == 3 || days == 4) ? 'дня' : 'дней'}</p>
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

export default dynamic(() => Promise.resolve(Banner), {ssr: false})