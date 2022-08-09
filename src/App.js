import 'antd/dist/antd.css'; 

import react, { useState } from 'react';

import FlyoutTable from "./components/flyoutTable";

import { Layout, Menu, Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';

import Pdf from './pdf/Rickert_CV_ENG.pdf';
import Cake from './images/cake.svg';
import Mail from './images/mail.svg';
import Phone from './images/phone.svg';
import Name from './images/name.svg';


const { Header, Content, Footer} = Layout;


class App extends react.Component{

  render(){
    
    return (
      <Layout className="layout">
        <Header>
          <h1>Rickert Goyvaerts</h1>
          <Menu className='menu' theme="dark">
            <Menu.Item><a  href = {Pdf} target = "_blank"><h1>CV</h1></a></Menu.Item>
            <Menu.Item><h1>projects</h1></Menu.Item>
          </Menu>
        </Header>
        <Content className='main'>
          <div className='hero'>
            <div>
              <h1 className='title'>Hi,</h1>
              <h1 className='title'>I`m Rickert Goyvaerts.</h1>
              <h2>web-dev, web-design, ...</h2>
            </div>
            <div className='img'>
              <Avatar shape="square" size={300} icon={<UserOutlined />} />
            </div>
          </div>
        </Content>
        <Content className='about-me'>
          <h1 className='title--content'>about me</h1>
          <FlyoutTable title="Personal" table={
            <ul>
              <li className='text-large'><img className='icon' src={Name}/> Rickert Goyvaerts</li>
              <li className='text-large'><img className='icon' src={Mail}/> Rickert.Goyvaerts@gmail.com</li>
              <li className='text-large'><img className='icon' src={Phone}/> +32 4 72815156</li>
              <li className='text-large'><img className='icon' src={Cake}/> 04/12/2000</li>
            </ul>}/>
          <FlyoutTable title="Education" table={
            <ul>
              <div className='education-container'>
                <li className='text-large'>Animalcare, Sint-Jozef</li>
                <li className='text-small outline-right'>Geel</li>
                <li className='text-small'>sep 2012 - jun 2018</li>
              </div>
              <div className='education-container'>
                <li className='text-large'>general 7th year, Sint-Jozef</li>
                <li className='text-small outline-right'>Geel</li>
                <li className='text-small'>sep 2018 - jun 2019</li>
              </div>
              <div className='education-container'>
                <li className='text-large'>Nxt Media Techologie, KDG</li>
                <li className='text-small outline-right'>Hoboken</li>
                <li className='text-small'>sep 2019 - now</li>
              </div>
            </ul>}/>
        </Content>
        <Footer>
        </Footer>
      </Layout>
    );
  }
}

export default App;
