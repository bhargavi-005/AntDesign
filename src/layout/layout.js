import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content}= Layout;


function LayOut(){
    return(

        <div>
        <Layout>
        <Header style={{backgroundColor: "red"}}>Header</Header>
        <Content style={{backgroundColor: "black"}}>Content</Content>
        <Footer style={{backgroundColor: "red"}}>Footer</Footer>
      </Layout> 

      <br></br>
      <br></br>

      <Layout>
      <Sider style={{backgroundColor: "pink"}}>Sider</Sider>
      <Layout>
        <Header style={{backgroundColor: "red"}}>Header</Header>
        <Content style={{backgroundColor: "blue"}}>Content</Content>
        <Footer style={{backgroundColor: "red"}}>Footer</Footer>
      </Layout>
    </Layout>

      </div>

    )
}
export default LayOut;