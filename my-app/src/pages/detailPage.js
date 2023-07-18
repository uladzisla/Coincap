import React, { useEffect } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/dataStore";
import DetailCoin from "../components/detailCoin";

// import { Button, Input, Space, Typography } from "antd";
// const { Text } = Typography;

const DetailPage = () => {
  const data = useSelector((store) => store.dataStore.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <Header />

      <DetailCoin />
    </>
  );
};
export default DetailPage;
