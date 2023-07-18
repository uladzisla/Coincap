import { Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/dataStore";
import { useNavigate } from "react-router-dom";
import { fetchCurrent } from "../redux/currentStore";
import { fetchHistory } from "../redux/historyCurrentStore";
import ModalAddCoin from "./modal/modalAddCoin";
import { itemCase, addPrice, toggleModal, addQty } from "../redux/caseStore";

const TableWithData = () => {
  const data = useSelector((store) => store.dataStore.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const navigate = useNavigate();
  const dataSource = data.map((item) => ({ ...item, key: item.id }));
  const stateModal = useSelector((store) => store.caseStore.stateModal);
  const columns = [
    {
      title: "№",
      dataIndex: "rank",
      key: "N",
    },
    {
      title: "",
      dataIndex: "symbol",
      key: "symbol",
      render: (text) => {
        let color = "red";
        let font_weight = "700";

        return (
          <Tag color={color} key={text} font_weight={font_weight}>
            <>{text.toUpperCase()}</>
          </Tag>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "VWAP(24Hr)",
      dataIndex: "vwap24Hr",
      key: "VWAP(24Hr)",
    },
    {
      title: "Change(24Hr)",
      dataIndex: "changePercent24Hr",
      key: "Change(24Hr)",
      render: (text) => {
        let color = parseInt(text) > 0 ? "geekblue" : "green";

        if (parseInt(text) === 0) {
          color = "volcano";
        }
        return (
          <Tag color={color} key={text}>
            {text.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Market Cap",
      dataIndex: "marketCapUsd",
      key: "Market Cap",
    },
    {
      title: "Price",
      key: "Price",
      dataIndex: `priceUsd`,
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              dispatch(itemCase(record));
              dispatch(addPrice(record.priceUsd));
              dispatch(toggleModal(stateModal));
            }}
          >
            +
          </button>
        </Space>
      ),
    },
  ];

  return (
    <>
      {stateModal && <ModalAddCoin />}
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{
          defaultPageSize: "10",
          showSizeChanger: true,
          pageSizeOptions: [5, 10, 15, 20],
        }}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              // console.log(event);

              dispatch(fetchCurrent(record.id));
              dispatch(fetchHistory(record.id));
              navigate("/detail");
            },

            // click row
          };
        }}
      />
    </>
  );
};
export default TableWithData;
