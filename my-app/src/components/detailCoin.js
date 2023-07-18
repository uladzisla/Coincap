import { useDispatch, useSelector } from "react-redux";
import { fetchCurrent } from "../redux/currentStore";
import React, { useEffect } from "react";
import {
  Button,
  Input,
  Space,
  Table,
  Form,
  Tag,
  Typography,
  Col,
  Row,
} from "antd";
import TableComponent from "./tableIdCoin";
import Grafick from "./chart/chart";
import { useNavigate } from "react-router-dom";
import { itemCase, addQty, totalPrice, finalCase } from "../redux/caseStore";
const { Search } = Input;

//
const { Text } = Typography;
//
const columns = [
  {
    title: "Информация",
  },
  {
    title: "Данные о валюте",

    key: "id",
  },
];

const DetailCoin = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchCurrent());
  // }, [dispatch]);
  const data = useSelector((store) => store.currentCoin.data);
  console.log({ data });

  const navigate = useNavigate();
  const countObject = useSelector((store) => store.caseStore.objectCount);
  const price = useSelector((store) => store.caseStore.price);

  const onSearch = (value) => {
    dispatch(totalPrice(parseInt(price) * value));
    dispatch(addQty(value));
    dispatch(finalCase({ 0: { ...data }, quontity: value }));

    // dispatch(toggleModal(stateModal));
  };
  return (
    <>
      <div>
        <Text type="success">{data.symbol} </Text>
        <Text type="danger">{data.name}</Text>
      </div>

      <Space.Compact
        style={{
          width: "70%",
        }}
      >
        <Search
          placeholder="Сколько желаете приобрести?"
          allowClear
          enterButton="Купить"
          size="large"
          onSearch={onSearch}
        />
      </Space.Compact>
      <TableComponent />
      <Row>
        <Col span={16}>
          <Grafick />
        </Col>
      </Row>
      <Button type="primary" danger ghost onClick={() => navigate("/")}>
        back
      </Button>
    </>
  );
};
export default DetailCoin;
