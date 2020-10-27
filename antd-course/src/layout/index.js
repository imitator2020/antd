import {Component} from 'react';
import {Layout, Menu,Icon} from 'antd';
import "antd/dist/antd.css";
// import { PieChartOutline} from '@ant-design/icons';
import {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LinkOutlined
  } from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
class BasicLayout extends Component {
    render() {
        return (
         
            <Layout>
                <Layout>
                    <Sider width={256} style={{minHeight: '100vh'}}>
                        <div style={{height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}} />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1" icon={<CalendarOutlined />}>
                                {/* <CalendarOutlined /> */}
                                <Icon
                                    type = "home"   //图标样式
                                    theme = "filled"　　　　//风格，实心，描线，双色等 （filled ， outlined ， twoTone）
                                />
                                <span>HelloWorld</span>
                            </Menu.Item>
                            <SubMenu
                            key="sub1"
                            title={<span><span>Dashboard</span></span>}
                            >
                           <Menu.Item key="2">分析页</Menu.Item> 
                           <Menu.Item key="3">监控页</Menu.Item>
                           <Menu.Item key="4">工作台</Menu.Item>
                            </SubMenu>
                        </Menu>

                    </Sider>
                    <Layout>
                    <Header style={{background: '#fff', textAlign: 'center', padding: 0}}>Header</Header>
                    <Content style={{margin: '24px 16px 0'}}>
                        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                        {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout;