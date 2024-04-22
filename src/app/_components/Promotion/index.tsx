'use client'

import React, { useEffect, useState } from 'react'

import classes from './index.module.scss'

const Promotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 7) // Target date 7 days from now

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date()
      const timeRemaining = Math.max(
        0,
        Math.floor((Number(targetDate) - Number(currentTime)) / 1000),
      )

      // Convert time remaining to days, hours, minutes, and seconds
      const days = Math.floor(timeRemaining / 86400)
      const hours = Math.floor((timeRemaining % 86400) / 3600)
      const minutes = Math.floor((timeRemaining % 3600) / 60)
      const seconds = Math.floor(timeRemaining % 60)

      setTime({ days, hours, minutes, seconds })
    }, 1000) // Update every second

    return () => clearInterval(intervalId) // Clean up the interval on unmount
  }, [targetDate])

  return (
    <section className={classes.promotion}>
      <div className={classes.textbox}>
        <h3 className={classes.title}>Deals of the Month</h3>
        <p>
          Get ready for a shopping experience like never before with our Deals of the Month! Every
          purchase comes with exclusive perks and offers, making this month a celebration of savvy
          choices and amazing deals. Don't miss out! 🎁🛒
        </p>

        <ul className={classes.stats}>
          <StatBox label="Days" value={time.days} />
          <StatBox label="Hours" value={time.hours} />
          <StatBox label="Minutes" value={time.minutes} />
          <StatBox label="Seconds" value={time.seconds} />
        </ul>
      </div>
    </section>
  )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className={classes.statBox}>
    <h4>{value}</h4>
    <p>{label}</p>
  </li>
)

export default Promotion
