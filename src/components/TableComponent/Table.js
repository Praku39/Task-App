import React from 'react';
import "antd/dist/antd.css";
import { Table } from "antd";

const columns = [
    {
      title: "Id",
      dataIndex: "id",
      responsive: ["sm"]
    },
    {
      title: "Title",
      dataIndex: "title",
      responsive: ["sm"]
    },
    {
      title: "Description",
      dataIndex: "body",
      responsive: ["sm"]
    }
  ];

function TableComponent(props){
    
    return(
        <div>
            <Table columns={columns} dataSource={props.data} pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}}/>
        </div>
    )
}

export default TableComponent;