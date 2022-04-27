import './App.css';
import { Menu, Layout } from 'antd';
import Routes from './routes';
import { ProfileTwoTone } from '@ant-design/icons'

import { useHistory } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;

function App() {

  const history = useHistory();
  return (
    <div className='main'>
      <Layout className='main__content'>
        <Header className='header'>Lista de Compras</Header>
        <Layout>
          <Sider className='menu'>
            <Menu className='menu__section' mode="horizontal">
              <Menu.SubMenu key="SubMenu"
              icon={<ProfileTwoTone twoToneColor="#52c41a"
              style={{ fontSize: '60px' }}/>}>
                <Menu.Item key={1}
                onClick={() => history.push('/add')}>
                  Adicionar
                </Menu.Item>
                <Menu.Item key={2}
                onClick={() => history.push('/produtos')}>
                  Listar
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Sider>
          <Content className='api_content'>
            <Routes/>
          </Content>
        </Layout>
        <Footer className='footer'>Todos os direitos reservados</Footer>
      </Layout>
      </div>
  );
}

export default App;
