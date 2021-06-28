import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLogs } from '../redux/reducers/logs'
import '../assets/scss/main.scss'

const Logs = () => {
  const logs = useSelector((s) => s.logs.logs)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLogs())
  }, [dispatch])
  return (
    <div>
      <h3>Logs</h3>
      {logs.map((el) => (
        <div key={el.time} className="flex">
          <div className="w-1/3">{el.time}</div>
          <div className="w-2/3">{el.event}</div>
        </div>
      ))}
    </div>
  )
}

export default Logs
