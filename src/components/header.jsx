import React from "react";

import Pdf from '../pdf/Rickert_CV_ENG.pdf';

import { Layout, Menu } from 'antd';

const { Header } = Layout;

const Head = () =>{
    return(
        <Header>
            <h1>Rickert Goyvaerts</h1>
            <Menu className='menu' theme="dark">
                <Menu.Item><a  href={Pdf} target = "_blank"><h1>CV</h1></a></Menu.Item>
                <Menu.Item><a href="#projects"><h1>projects</h1></a></Menu.Item>
            </Menu>
        </Header>
    );
}

export default Head;