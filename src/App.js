import 'antd/dist/antd.css'; 

import { Layout, Menu } from 'antd';

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
      <Content style={{ padding: '0 50px' }}>
      </Content>
    </Layout>
  );
}

export default App;
