import React from "react";

import Card from '../components/Card';

import image1 from "../images/image.jpg"
import image2 from "../images/image2.png"
import image3 from "../images/image3.jpg"

import { Layout, Col, Row } from 'antd';

const { Content } = Layout;

const Projects = () =>{
    return(
        <Content className="projects" id="projects">
            <h1 className='title--content'>projects</h1>
            
            <div>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="KDG cardscanner" img={image1} content={
                            <p className="text--content">this was a project that we did for KDG. they needed a way to let students scan in at the start of class or an exam.
                                we made an applictation that let students scan in with there student card and then the teacher can see who is there and who didnt attend.
                                this app is made with a raspberrypi that scans the cards and sends the data to a website. The website is made with react front end and laravel backend.

                            </p>
                        }/>
                    </Col>
                    <Col span={8}>
                        <Card title="Antwerp Lacrosse" img={image2} content={
                            <p className="text--content">
                                the Antwerp lacrosse website was also made as a project in school. This website is made with the kirby cms.
                                its not done jet but mostly there. there are some bugs here and there. I did the front end on this website. The backend has been done by another student.

                            </p>
                        }/>
                    </Col>
                    <Col span={8}>
                        <Card title="ernst@work" img={image3} content={
                            <p className="text--content">
                                The ernst@work website was my first project while i was working for ernst@work. The website is made with .net.
                                Not my prefered framework but it does its job. This was my first project i had to do for actual work wich was very scarry.
                                The website itself isnt to dificult. Its a static website so minimal backend. 
                            </p>
                        }/>
                    </Col>
                </Row>
            </div>
        </Content>
    );

}

export default Projects;