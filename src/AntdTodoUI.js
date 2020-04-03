import React from 'react';
import { Input, Button, List } from 'antd'

const AntdTodoUI = (props) => {
  return (
    <div style={{width: 500, padding: 20}}>
      <div style={{marginBottom: '10px', display: 'flex'}}>
        <Input
          style={{marginRight: 10}}
          placeholder="todo info"
          value={ props.inputValue }
          onChange={ props.handleChangeInput }
        />
        <Button 
          type="primary"
          onClick={ props.handleBtnClick }
        >提交</Button>
      </div>
      <List
        size="large"
        bordered
        dataSource={ props.list }
        renderItem={(item, index) => <List.Item onClick={ () => {props.handleItemDelete(index)} }>{item}</List.Item>}
      />
    </div>
  )
}

export default AntdTodoUI;