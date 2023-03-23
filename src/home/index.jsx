import React from 'react'
import {
  Carousel,
  Row,
  Col,
  Card,
  Typography,
  Divider,
  Layout,
  Menu,
  Button,
  Dropdown,
  Space,
} from 'antd'
import { DownOutlined } from '@ant-design/icons'
import styles from './index.module.css'

const { Header, Content, Footer } = Layout
const { Title, Paragraph } = Typography

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
)

const Home = () => {
  return (
    <Layout
      style={{
        padding: 0,
        margin: 0,
        textAlign: 'center',
        justifyContent: 'space-around',
      }}>
      <Header style={{ padding: 0 }}>
        {/* <div className="logo" /> */}
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{
            textAlign: 'center',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: 'black',
            color: 'white',
          }}>
          <Menu.Item key="1" style={{fontSize:'24px'}}>logo!</Menu.Item>
          <Menu.Item key="2">
            3D Models
          </Menu.Item>
          <Menu.Item key="3">
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              contact us <DownOutlined />
              </a>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Carousel>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="carousel-1" />
            <div className="carousel-text">
              <h3>Carousel 1</h3>
              <p>Some description about carousel 1</p>
            </div>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/800x400/000000/FFFFFF?text=Carousel+2
            "
              alt="carousel-2"
            />
            <div className="carousel-text">
              <h3>Carousel 2</h3>
              <p>Some description about carousel 2</p>
            </div>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/800x400/000000/FFFFFF?text=Carousel+3"
              alt="carousel-3"
            />
            <div className="carousel-text">
              <h3>Carousel 3</h3>
              <p>Some description about carousel 3</p>
            </div>
          </div>
        </Carousel>
        <div className="intro-section">
          <Title level={2}>Welcome to our website</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl vel tincidunt pretium, quam sapien aliquet velit, vel
            lacinia nisl velit vel dolor. Sed euismod, nisl vel tincidunt
            pretium, quam sapien aliquet velit, vel lacinia nisl velit vel
            dolor.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl vel tincidunt pretium, quam sapien aliquet velit, vel
            lacinia nisl velit vel dolor. Sed euismod, nisl vel tincidunt
            pretium, quam sapien aliquet velit, vel lacinia nisl velit vel
            dolor.
          </Paragraph>
        </div>
        <Divider />
        <div className="sample-section">
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Card title="Sample 1" bordered={false}>
                <img src="https://via.placeholder.com/300x200" alt="sample-1" />
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Sample 2" bordered={false}>
                <img src="https://via.placeholder.com/300x200" alt="sample-2" />
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Sample 3" bordered={false}>
                <img src="https://via.placeholder.com/300x200" alt="sample-3" />
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Sample 4" bordered={false}>
                <img src="https://via.placeholder.com/300x200" alt="sample-4" />
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Sample 5" bordered={false}>
                <img src="https://via.placeholder.com/300x200" alt="sample-5" />
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Sample 6" bordered={false}>
                <img src="https://via.placeholder.com/300x200" alt="sample-6" />
              </Card>
            </Col>
          </Row>
        </div>
        <div className="footer-section">
          <div className="footer-content">
            <p>Copyright © 2021</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default Home
