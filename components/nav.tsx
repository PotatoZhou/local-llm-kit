import {
  DesktopOutlined,
  PieChartOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Flex, Input, Layout, Menu, theme } from 'antd';
import React, { useEffect, useState } from 'react';

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dev', '1', <PieChartOutlined />),
  getItem('Search', '2', <DesktopOutlined />),
//   getItem('User', 'sub1', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [chatHistory, setChatHistory] = useState<{
    Summary: string, Date: number
    }>({ Summary: 'test', Date: 2024711 })

    useEffect(() => {
        // TODO: 拿记录的逻辑
        setChatHistory({Summary: 'test', Date: 2024711})
    }, [])

    const onChatSearch = () => {
      console.log('search')
    }
  return (
    <Layout style={{ minHeight: '100vh' }} hasSider={true}>
                <Sider 
                  collapsible 
                  collapsed={collapsed} 
                  onCollapse={(value) => setCollapsed(value)}
                  trigger={null}
                  width={250}
                  >
                  <div className="demo-logo-vertical" />
                  <div className='bg-white h-10'>
                      <>New Chat</>
                  </div>
                  <div>
                    <Search placeholder='Search Chats'></Search>
                  </div>
                  <br></br>
                  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                  <div>
                      <>History</>
                  </div>
                  <Flex align='flex-end'>
                    <div>account</div>
                  </Flex>
              </Sider>
      
      <Layout>
        {/* <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content className='mt-10'>
            <Card className='h-50'>
                what <Divider type='vertical'></Divider> sha
            </Card>
        </Content> */}
      </Layout>
    </Layout>
  );
};

export default Sidebar;