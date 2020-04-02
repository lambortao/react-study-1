import React from 'react';
import { Input, Button, List } from 'antd'

class AntdTodoUI extends React.Component {
  render() {
    return(
      <div style={{width: 500, padding: 20}}>
        <div style={{marginBottom: '10px', display: 'flex'}}>
          <Input
            style={{marginRight: 10}}
            placeholder="todo info"
            value={ this.props.inputValue }
            onChange={ this.props.handleChangeInput }
          />
          <Button 
            type="primary"
            onClick={ this.props.handleBtnClick }
          >提交</Button>
        </div>
        <List
          size="large"
          bordered
          dataSource={ this.props.list }
          renderItem={(item, index) => <List.Item onClick={ (index) => {this.props.handleItemDelete(index)} }>{item}</List.Item>}
        />
      </div>
    );
  }
}

export default AntdTodoUI;