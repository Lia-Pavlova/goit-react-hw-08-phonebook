import { CSSTransition } from 'react-transition-group'
import welcomeAlf from './alf.png'
import s from '../HomePage/HomePage.module.css'
import fadeAlfStyles from './fadeAlf.module.css'
import fadeText1 from '../HomePage/fadeText1.module.css'
import fadeText2 from '../HomePage/fadeText2.module.css'

export default function HomePage() {
  return (
    <div className={s.HomePage}>
      <CSSTransition
        in={true}
        appear={true}
        timeout={1500}
        classNames={fadeAlfStyles}
        unmountOnExit
      >
        <div className={s.HomePage__imgWrap}>
          <img
            src={welcomeAlf}
            className={s.HomePage__image}
            alt="Welcome cat"
          />
        </div>
      </CSSTransition>
      <div className={s.HomePage__titlesWrap}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={1500}
          classNames={fadeText1}
          unmountOnExit
        >
          <h1 className={s.HomePage__title}>Keep calm </h1>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          timeout={2500}
          classNames={fadeText2}
          unmountOnExit
        >
          <h1 className={s.HomePage__title}>Use PhoneBook</h1>
        </CSSTransition>
      </div>
    </div>
  )
}
