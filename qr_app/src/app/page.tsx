import Image from 'next/image'
import styles from './page.module.css'

import {QrCard} from '../components/QrCard'

export default function Home() {
  const stylesx = {
    color:'hsl(212, 45%, 89%)',
  };
  return (
    
    <div className={styles.main} style={stylesx}> 
      <QrCard />
    </div>
  )
}
