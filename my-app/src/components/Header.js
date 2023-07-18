import React, { useEffect } from "react";
import { Button, Col, Row, Space, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingOutlined } from "@ant-design/icons";
import { toggleStatus } from "../redux/modal_on_off";
import { totalPrice } from "../redux/caseStore";
const { Title, Text } = Typography;
function Header() {
  const data = useSelector((store) => store.dataStore.data);
  const status = useSelector((store) => store.stateModal.status);
  const count = useSelector((store) => store.caseStore.count);

  const dispatch = useDispatch();
  useEffect(() => {}, [count]);
  return (
    <>
      <Row>
        <Col xs={{ span: 5, offset: 4 }} lg={{ span: 8, offset: 3 }}>
          <Title level={4}>Самые популярные криптовалюты :</Title>
        </Col>
        <Col xs={{ span: 5, offset: 4 }} lg={{ span: 9, offset: 5.5 }}>
          <Space>
            <Button
              type="primary"
              onClick={() => dispatch(toggleStatus(status))}
            >
              {<ShoppingOutlined />}
            </Button>
            <Text type="secondary">ИТОГО:</Text>
            <Text type="danger">{`${count} $`}</Text>
          </Space>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 3, offset: 2 }} lg={{ span: 3, offset: 2 }}>
          Bitcoin:{" "}
          {data.map((item) =>
            item.name === "Bitcoin" ? (
              <span key={item.id}>{item.priceUsd}</span>
            ) : (
              ""
            )
          )}
        </Col>
        <Col xs={{ span: 3, offset: 2 }} lg={{ span: 2, offset: 0 }}>
          Ethereum:{" "}
          {data.map((item) =>
            item.name === "Ethereum" ? (
              <span key={item.id}>{item.priceUsd}</span>
            ) : (
              ""
            )
          )}
        </Col>
        <Col xs={{ span: 3, offset: 2 }} lg={{ span: 1, offset: 0 }}>
          Tether:{" "}
          {data.map((item) =>
            item.name === "Tether" ? (
              <span key={item.id}>{item.priceUsd}</span>
            ) : (
              ""
            )
          )}
        </Col>
      </Row>
    </>
  );
}

export default Header;
