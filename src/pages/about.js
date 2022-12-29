import React from 'react'

import Layout from '../components/layout'
import aboutStyles from '../styles/about.module.scss'

const AboutPage = () => {
    return (

        <Layout>
            <h1>Who am I?</h1>
            <hr className={aboutStyles.spliter}></hr>
            <div>
                <h2>經歷</h2>
                <div>
                    <h3>Ucfunnel</h3>
                    <h4 className={aboutStyles.jobdate}>Jul.2021 - Jan.2022</h4>
                    <h4 className={aboutStyles.jobtitle}>後端研發實習生</h4>
                </div>
                <ul>
                    <li>開發設計團購流程系統，對 Line 官方賬號進行關鍵字識別，並串接蘭新金流 API</li>
                    <li>開發與維運團購微服務，以建立於 Kubernates 叢集管理系統之 rancher 操作</li>
                    <li>維護 KOL 系統，於 MongoDB 中搜集並分析 influencers 的目標客群</li>
                    <li>開發內部用每日報表檢查腳本，以 airflow 串接 google gmail, google calender API 實現</li>
                    <li>設計並實現包含 CRUD 操作的 Restful API，並基於 JWT token 的權限驗證</li>
                </ul>
                <div>
                    <h3>Pycon Taiwan 2021</h3>
                    <h4 className={aboutStyles.jobdate}>Mar.2021 - Jun.2021</h4>
                    <h4 className={aboutStyles.jobtitle}>基礎設施開發志工</h4>
                </div>
                <ul>
                    <li>動態網站靜態化，實現網頁爬蟲重建 2016 - 2020 Pycon 網站，以降低維護 Python Django Server 的成本</li>
                </ul>
                <div>
                    <h3>InstaLoan</h3>
                    <h4 className={aboutStyles.jobdate}>Dec.2020 - Feb.2021</h4>
                    <h4 className={aboutStyles.jobtitle}>團隊接案</h4>
                </div>
                <ul>
                    <li>開發設計一款借貸 APP，基於 React Native 與 Expo 框架的實現</li>
                    <li>以 google firebase 同步使用者資訊，包含使用者電話、位置、通訊紀錄以及聯絡人</li>
                    <li>建立使用者 OTP 手機註冊流程，並以 firebase reCAPTCHA 防範腳本機器人</li>
                </ul>
                <div>
                    <h3>國泰世華銀行</h3>
                    <h4 className={aboutStyles.jobdate}>Dec.2019 - Dec.2020</h4>
                    <h4 className={aboutStyles.jobtitle}>交易室實習生</h4>
                </div>
                <ul>
                    <li>以 UI/UX 之角度維護並設計視覺化的金融數據資料，呈現於建立在 Apache Server 中的內部網站</li>
                    <li>基於 Python 開發每日報表檢查腳本，自動擷取每日最新客戶資料，並更新於 MySQL 資料庫中</li>
                    <li>開發週期性檢查系統，更新並整理最新金融產品供不同權限的理專檢視</li>
                </ul>
                <hr className={aboutStyles.spliter}></hr>
                <h2 id="學歷" data-id="學歷">學歷</h2>
                <ul>
                    <li><h4>國立政治大學</h4>
                        <ul>
                            <li>
                                資訊科學系學士
                                <h5 className={aboutStyles.jobdate}>Sep.2019 - present</h5>
                            </li>
                            <li>
                                教學助理
                                <h5 className={aboutStyles.jobdate}>Sep.2020 - present</h5>
                            </li>
                            <li>
                                研究助理 @ 計算語言學與資訊處理實驗室  
                                <h5 className={aboutStyles.jobdate}>Dec.2021 - present</h5>
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr className={aboutStyles.spliter}></hr>
                <h2 id="得獎紀錄" data-id="得獎紀錄">得獎紀錄</h2>
                <ul>
                    <li>2020 ICPC Asia Taipei-Hsinchu Regional Programming Contest Final (Honorable Mention)</li>
                    <li>2021 ICPC Asia Taipei-Hsinchu Regional Programming Contest Final (Honorable Mention)</li>
                    <li>2022 ICPC Asia Taoyuan Regional Programming Contest Final (Bronze Award<span role="img" aria-label="bronze">🥉</span>)</li>
                </ul>
                <hr className={aboutStyles.spliter}></hr>
                <h2 id="興趣、愛好" data-id="興趣、愛好">興趣、愛好</h2>
                <div class={aboutStyles.block}>
                    <div class={aboutStyles.block_detail}>
                        <img src="https://i.imgur.com/YxgByJe.jpg" alt="" className={aboutStyles.photo}/>
                    </div>
                    <div class={aboutStyles.detail}>
                    <ul>
                        <li>桌球小能手</li>
                        <li>擊劍愛好者 EPEE Lover</li>
                        <li>不專業攝影師</li>
                    </ul>
                    </div>
                </div>
                <hr className={aboutStyles.spliter}></hr>
                <h2 id="專業技術" data-id="專業技術">專業技術</h2>
                <ul>
                    <li>C/C++</li>
                    <li>Python</li>
                    <li>Go</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>PHP</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Airflow</li>
                    <li>Docker</li>
                    <li>Kubernates</li>
                </ul>
                <hr className={aboutStyles.spliter}></hr>
                <h2 id="聯絡資訊" data-id="聯絡資訊">聯絡資訊</h2>
                <ul>
                    <li>Email: <a href="mailto:mozixreality@gmail.com"
                        rel="noopener">mozixreality@gmail.com</a></li>
                    <li>FB: <a href="http://www.facebook.com/mozixreality"
                        rel="noopener">www.facebook.com/mozixreality</a></li>
                    <li>IG: <a href="http://www.instagram.com/mozixreality"
                        rel="noopener">www.instagram.com/mozixreality</a></li>
                </ul>
            </div>
        </Layout>
    )
}

export default AboutPage;

