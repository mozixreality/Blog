import React from 'react'

import Layout from '../components/layout'
import featuredStyles from './featured.module.scss'
import '../styles/index.scss'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hi! I'm Mozix!</h1>
      <p>
        這個是我的第一個部落格，往後我將會在這裡紀錄所學到的新事物! OuOb
      </p>
      <div style={{margin: 100}}>
        <img className={featuredStyles.mozix} src="https://i.imgur.com/AaVdU5l.jpg" alt="mozix"/>
      </div>
      <h1>部落格源起</h1>
      <p>&nbsp;&nbsp;
        現在是 2021/02/13 深夜 2 點左右，同時也是今年農曆新年的初二子夜，我首次更新了自己部落格的首頁。
        其實老早前就一直嚷著要建立自己的部落格紀錄所學到的東西，不過拖著拖著也是到了最近才真正開始動手作，
        而促使我完成這個部落格的人是學長 Josix。
      </p>
      <p>&nbsp;&nbsp;
        起初是我有幸在 2020 年底與 Philip Wang、CTHua 以及 chenshaw1999 一起接下了一個外包的小案子，
        由於業主希望我們團隊能以 React Native 作為開發工具，我才因而接觸到 React。起初我連 Java Script 
        都不是很熟，完全是拉低團隊戰力的雷隊友，可以說是從零開始的 NodeJS 學習生活 Orz。
      </p>
      <p>&nbsp;&nbsp;
        湊巧的是 Josix 也懂 React，我還記得是 109 上學期經濟學期末考完後，學長花了約莫整個下午的時間跟我說明整個 React
        的架構，我才能在案子的進度上有所進展。而 Josix 也建議我把學到的東西寫成網頁，如此才可以知道自己到底有沒有學會，
        加上自己原本就想建立一個屬於自己的部落格，因此這個部落格就誕生了 !!!
      </p>
      
    </Layout>
  )
}

export default IndexPage;