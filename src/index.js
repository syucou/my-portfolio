import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import BasicList from './basiclists';
import ColorRadioButtons from './colorradio';
import BilibiliEmbed from './bilibili';
import FloatingActionButtons from './dehaze';
import FloatingActionButtonUpIcon from './upicon';
import AntList from './antlists';
import ContactForm1 from './contact';
import Context from './context';

function Nav(props){
  const home_li = "HOME";
  const profile_li = "PROFILE";
  const news_li = "NEWS";
  const gallery_li = "GALLERY";
  const contact_li = "CONTACT";

  return(
    <nav>
      <ul>
        <li key="home"><Link to="/" className="link">{home_li}</Link></li>
        <li key="profile"><Link to="/profile" className="link">{profile_li}</Link></li>
        <li key="news">{news_li}</li>
        <li key="gallery"><Link to="/gallery" className="link">{gallery_li}</Link></li>
        <li key="contact"><Link to="/contact" className="link">{contact_li}</Link></li>
      </ul>
    </nav>
  );
}

//sns
function Icons(props){
  return(
    <div className="icons">
      <a href="https://twitter.com/nezumi_94" target="_blank">
        <img src={`${process.env.PUBLIC_URL}/icons/twitter.png`} className="twitter" alt="twitter"></img>
      </a>
      <a href="https://www.pixiv.net/users/26295133" target="_blank">
        <img src={`${process.env.PUBLIC_URL}/icons/pixiv.png`} className="pixiv" alt="twitter"></img>
      </a>
        <img src={`${process.env.PUBLIC_URL}/icons/ins.png`} className="ins" alt="twitter"></img>
      <a href="https://space.bilibili.com/27661335" target="_blank">
        <img src={`${process.env.PUBLIC_URL}/icons/bilibili.png`} className="bilibili" alt="bilibili"></img>
      </a>
      <a href="https://weibo.com/3879693956" target="_blank">
        <img src={`${process.env.PUBLIC_URL}/icons/weibo.svg`} className="weibo" alt="twitter"></img>
      </a>
    </div>
  );
}

//news
function News(props){
  return(
    <section>
      <div className="h1-news">
        <h2 className="h2">{"NEWS"}</h2>
      </div>
    <div className="basiclist">
      <AntList />
    </div>
    </section>
  );
}

//冒頭の画像　Carouselを利用
function IndexGallery(props){
  const bool_t = true;
  const bool_f = false;

  return(
    <section>
      <div >
        <div className="pic-gallery">
          <Carousel 
            indicatorPosition="none" 
            infiniteLoop={bool_t} 
            showThumbs={bool_f} 
            showArrows={bool_t} 
            autoPlay={bool_t}
            className="index-pic"
            >
            <div>
              <img className="index-gallery" src={`${process.env.PUBLIC_URL}/gallery/2017-07-12.jpg`} />
            </div>
            <div>
              <img className="index-gallery" src={`${process.env.PUBLIC_URL}/gallery/2017-08-30.jpg`} />
            </div>
            <div>
              <img className="index-gallery" src={`${process.env.PUBLIC_URL}/gallery/2017-09-23.jpg`} />
            </div>
          </Carousel>
        </div>
      <ColorRadioButtons />
      </div>
    </section>
  );
}

//media
function Media(props){
  return(
    <section>
      <div>
        <h2 className="h2">{"MEDIA"}</h2>
      </div>
      <div className="bilibili-div">
        <BilibiliEmbed embedId="player.html?aid=293089556" />
      </div>
    </section>
  );
}

//Galleryページの画像　いつか別のところに移す予定
function Pictures(props){
  return(
    <div style={{
      paddingTop: "15px"
    }}>
      <div className="gallery-block">
        <img className="gallery-pics" src={`${process.env.PUBLIC_URL}/gallery/2017-09-23.jpg`}></img>
        <p className="p-pic">{"2017-09-23"}</p>
      </div>
      <div className="gallery-block">
        <img className="gallery-pics" src={`${process.env.PUBLIC_URL}/gallery/2017-09-11.jpg`}></img>
        <p className="p-pic">{"2017-09-10"}</p>
      </div>
      <div className="gallery-block">
        <img className="gallery-pics" src={`${process.env.PUBLIC_URL}/gallery/2017-09-10.jpg`}></img>
        <p className="p-pic">{"2017-09-10"}</p>
      </div>
      <div className="gallery-block">
        <img className="gallery-pics" src={`${process.env.PUBLIC_URL}/gallery/2017-08-27.jpg`}></img>
        <p className="p-pic">{"2017-08-27"}</p>
      </div>
      <div className="gallery-block">
        <img className="gallery-pics" src={`${process.env.PUBLIC_URL}/gallery/2017-08-30.jpg`}></img>
        <p className="p-pic">{"2017-08-30"}</p>
      </div>
      <div className="gallery-block">
        <img className="gallery-pics" src={`${process.env.PUBLIC_URL}/gallery/2017-07-12.jpg`}></img>
        <p className="p-pic">{"2017-07-12"}</p>
      </div>
      <div className="gallery-block">
        <img className="gallery-pics" src={`${process.env.PUBLIC_URL}/gallery/2016-11-08.jpg`}></img>
        <p className="p-pic">{"2016-11-08"}</p>
      </div>
    </div>
    
  );
}

//header
class Header extends React.Component{
  
  render(){
    const name = "nezumi";
    const site = "Portfolio Site";
    return (
      <div className="header">
      <div className="div-nezumi">
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/icons/nezumi.png`} className="nezumi" alt="nezumi"/>
        </Link>
      </div>
      <div className="div-name"> 
      <p className="name"><Link to="/" className="link">{name}</Link></p>
      <p className="site-name"><Link to="/" className="link">{site}</Link></p>
      </div>
      <Icons/>
      <div className="div-nav">
      <Nav/>
      </div>
      </div>
    );
  }
}

//body
class HomeBody extends React.Component{
  render(){
    return(
      <div className="homebody">
        <FloatingActionButtons className="dehaze"/>
        <div className="gallery">
          <IndexGallery />
        </div>
        <div className="news">
          <News />
        </div>  
        <div className="media">
          <Media />
        </div> 
        <FloatingActionButtonUpIcon />
      </div>
    );
  }
}

//contact問い合わせページ
class ContactForm extends React.Component{
  render(){
    return(
      <div className="homebody">
        <FloatingActionButtons className="dehaze"/>
        <h1 className="h2" style={{
          paddingTop: "10px",
        }}>{"CONTACT"}</h1>
        <div className="contactform">
          <ContactForm1 />
        </div>
      </div>
    );
  }
}

//Galleryページ
class GalleryPage extends React.Component{
  render(){
    return(
      <div className="homebody">
        <FloatingActionButtons className="dehaze"/>
        <h1 className="h2" style={{
          paddingTop: "10px",
        }}>{"GALLERY"}</h1>
        <div className="pictures">
          <Pictures />
        </div>
        <FloatingActionButtonUpIcon />
      </div>
    );
  }
}

//Profileページ
class ProfileBody extends React.Component{
  render(){
    return(
      <div className="homebody">
        <FloatingActionButtons className="dehaze"/>
        <h1 className="h2" style={{
          paddingTop: "10px",
        }}>{"PROFILE"}</h1>
        <div className="profile">
          <Context />
        </div>
      </div>
    );
  }
}

//footer
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

/********************
 * これからはページの構造
 ********************/

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

class Profile extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <ProfileBody />
        <Footer />
      </div>
    );
  }
}

class Gallery extends React.Component{
  render(){
    return(
      <div>
        <Header />
          <GalleryPage />
        <Footer />
      </div>
    );
  }
}

class Contact extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter basename={process.env}>
    <Routes> 
      <Route path="/" element={<Index />}/>
      <Route path="profile" element={<Profile />}/>
      <Route path="gallery" element={<Gallery />}/>
      <Route path="contact" element={<Contact />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
