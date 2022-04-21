import 'antd/dist/antd.css'; 

import { Layout, Menu, Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <h1>Rickert Goyvaerts</h1>
        <Menu className='menu' theme="dark">
          <Menu.Item><h1>CV</h1></Menu.Item>
          <Menu.Item><h1>projects</h1></Menu.Item>
        </Menu>
      </Header>
      <Content className='main'>
        <div className='hero'>
          <div>
            <h1 className='title'>Hi.</h1>
            <h1 className='title'>Im Rickert Goyvaerts</h1>
            <h2>web-dev, web-design, ...</h2>
          </div>
          <div className='img'>
            <Avatar shape="square" size={300} icon={<UserOutlined />} />
          </div>
        </div>
      </Content>
      <Content className='about-me'>
        <h1 className='title--content'>about me</h1>
        <div className='flyout--Table'>
          <h3 className='title--table'>title</h3>
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
        <div className='flyout--Table'>
        <h3  className='title--table'>title</h3>
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
