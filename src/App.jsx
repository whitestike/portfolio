import 'antd/dist/antd.css'; 

import react, { useState } from 'react';

import { Layout } from 'antd';

import Home from './pages/home';
import Head from './components/header';
import Foot from './components/footer';
import Projects from './pages/projects';

class App extends react.Component{

  render(){
    
    return (
      <Layout className="layout">
        <Head/>
        <Home/>
        <Projects/>
        <Foot/>
      </Layout>
    );
  }
}

export default App;
