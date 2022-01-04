import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import BasicList from './basiclists';
import ColorRadioButtons from './colorradio';

function Nav(props){
  const home_li = "HOME";
  const profile_li = "PROFILE";
  const news_li = "NEWS";
  const gallery_li = "GALLERY";
  const contact_li = "CONTACT";

  return(
    <nav>
      <ul>
        <li key="home">{home_li}</li>
        <li key="profile">{profile_li}</li>
        <li key="news">{news_li}</li>
        <li key="gallery">{gallery_li}</li>
        <li key="contact">{contact_li}</li>
      </ul>
    </nav>
  );
}

function Icons(props){
  return(
    <div className="icons">
    <img src={`${process.env.PUBLIC_URL}/icons/twitter.png`} className="twitter" alt="twitter"></img>
    <img src={`${process.env.PUBLIC_URL}/icons/pixiv.png`} className="pixiv" alt="twitter"></img>
    <img src={`${process.env.PUBLIC_URL}/icons/ins.png`} className="ins" alt="twitter"></img>
    <img src={`${process.env.PUBLIC_URL}/icons/bilibili.png`} className="bilibili" alt="bilibili"></img>
    <img src={`${process.env.PUBLIC_URL}/icons/weibo.svg`} className="weibo" alt="twitter"></img>
    </div>
  );
}

function News(props){
  return(
    <section>
      <div classNew="h1-news">
        <h1 className="h1">{"NEWS"}</h1>
      </div>
    <div className="basiclist">
      <BasicList />
    </div>
    </section>
  );
}

function Gallery(props){
  return(
    <section>
      <div >
        <div className="pic-gallery">
          <img className="index-gallery" src={`${process.env.PUBLIC_URL}/gallery/2017-07-12.jpg`} alt="img"></img>
        </div>
      <ColorRadioButtons />
      </div>
    </section>
  );
}

class Header extends React.Component{
  
  render(){
    const name = "nezumi";
    const site = "Portfolio Site";
    return (
      <div className="header">
      <div className="div-nezumi">
      <img src={`${process.env.PUBLIC_URL}/icons/nezumi.png`} className="nezumi" alt="nezumi" />
      </div>
      <div className="div-name"> 
      <p className="name">{name}</p>
      <p className="site-name">{site}</p>
      </div>
      <Icons/>
      <div className="div-nav">
      <Nav/>
      </div>
      </div>
    );
  }
}

class HomeBody extends React.Component{
  render(){
    return(
      <div className="homebody">
        <div className="gallery">
          <Gallery />
        </div>
        <div className="news">
          <News />
        </div>   
      </div>
    );
  }
}

class Footer extends React.Component{

  render(){
    const copyright = "Copyright © NEZUMI All Rights Reserved"

    return(
      <div className="footer"> 
      <p className="copyright">{copyright}</p>
      <Icons/>
      </div>
    );
  }
}

class Index extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <HomeBody />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
