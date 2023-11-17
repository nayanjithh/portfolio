import React from 'react'
import './Work.css'

export default function Work () {
    return <div className="work">
        <div className='workBox'>
            <img className='boxImg' src="/image1.png" />
            <div className='workTitle'>
                <div className='workTitleMain'><a href='https://nayanjithh.github.io/Google/Google%203.0/Login/login.html'>Google Form</a></div>
                <div className='workTitleSub'>Front-end of Google form</div>
            </div>
        </div>
        <div className='workBox'>
            <img className='boxImg' src="/image2.png" />
            <div className='workTitle'>
                <div className='workTitleMain'><a href='https://nayanjithh.github.io/Frontend-Mentor/age-calculator-app-main/age-calculator-app-main/index.html'>Age Calculator</a></div>
                <div className='workTitleSub'>Finds your current age</div>
            </div>
        </div>
        <div className='workBox'>
            <img className='boxImg' src="/image3.png" />
            <div className='workTitle'>
                <div className='workTitleMain'><a href='https://nayanjithh.github.io/Frontend-Mentor/calculator-app-main/index.html'>Calculator</a></div>
                <div className='workTitleSub'>Mathematics calculator</div>
            </div>
        </div>
        <div className='workBox'>
            <img className='boxImg' src="/image4.png" />
            <div className='workTitle'>
                <div className='workTitleMain'><a href='https://nayanjithh.github.io/Frontend-Mentor/nft-preview-card-component-main/nft-preview-card-component-main/index.html'>NFT Card</a>NFT Card</div>
                <div className='workTitleSub'>NFT card from frontend mentor</div>
            </div>
        </div>
        <div className='workBox'>
            <img className='boxImg' src="/image5.png" />
            <div className='workTitle'>
                <div className='workTitleMain'><a href='https://nayanjithh.github.io/Areyou/Idiot/Idiot.html'>Areyou?</a></div>
                <div className='workTitleSub'>Simple foolish game</div>
            </div>
        </div>
    </div>
}