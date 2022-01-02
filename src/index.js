import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Icon from './icons/nezumi.png'
import Icon_weibo from './icons/weibo.svg'
import Icon_bilibili from './icons/bilibili.png'
import Icon_twitter from './icons/twitter.png'
import Icon_ins from './icons/ins.png'
import Icon_pixiv from './icons/pixiv.png'

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
    
    <img src={Icon_twitter} className="twitter" alt="twitter"></img>
    <img src={Icon_pixiv} className="pixiv" alt="twitter"></img>
    <img src={Icon_ins} className="ins" alt="twitter"></img>
    <img src={Icon_bilibili} className="bilibili" alt="bilibili"></img>
    <img src={Icon_weibo} className="weibo" alt="twitter"></img>
    </div>
  );
}

class Header extends React.Component{
  
  render(){
    const name = "nezumi";
    const site = "Portfolio Site"
    return (
      <header className="header">
      <div className="div-nezumi">
      <img src={Icon} className="nezumi" alt="nezumi" />
      </div>
      <div className="div-name"> 
      <p className="name">{name}</p>
      <p className="site-name">{site}</p>
      </div>
      <Icons/>
      <div class="div-nav">
      <Nav/>
      </div>
      </header>
    );
  }
}

class Footer extends React.Component{

  render(){
    const copyright = "Copyright © NEZUMI All Rights Reserved"

    return(
      <footer className="footer"> 
      <p className="copyright">{copyright}</p>
      <Icons/>
      </footer>
    );
  }
}

class Index extends React.Component{
  render(){
    return(
      <div>
        <Header />
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
