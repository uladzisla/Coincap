import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchData } from "../redux/dataStore";
import styles from "./tabledCoin.module.css";
import { fetchCurrent } from "../redux/currentStore";
const TableComponent = () => {
  // Данные для таблицы
  const data = useSelector((store) => store.currentCoin.data);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchCurrent( ));
  // }, [dispatch]);
  // console.log(data);
  return (
    <table border="1" width="300" height="200" className={styles.table}>
      <thead>
        <tr>
          <th>Информация </th>
          <th>Данные о валюте</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Цена</td>
          <td>{`${Number(data.priceUsd).toFixed(2)}  $`}</td>
        </tr>
        <tr>
          <td>Доступное предложение для торговли</td>
          <td>{`${Number(data.marketCapUsd / 1000000000).toFixed(
            2
          )} млрд $`}</td>
        </tr>
        <tr>
          <td>Общее количество выпущенных активов</td>
          <td>{`${Number(data.supply).toFixed()} ${data.symbol}`}</td>
        </tr>
        <tr>
          <td>Объем торгов за последние 24 часа</td>
          <td>{`${Number(data.volumeUsd24Hr / 1000000000).toFixed(
            2
          )} млрд. $`}</td>
        </tr>
        <tr>
          <td>Средняя цена по объему за последние 24 часа</td>
          <td>{`${Number(data.vwap24Hr).toFixed(2)} $`}</td>
        </tr>
        <tr>
          <td>Сайт</td>
          <td>
            <a href={data.explorer}>{data.explorer}</a>
          </td>
        </tr>

        {/* {[data].map((item) => (
          <tr key={item.id}>
            {" "}
            <td>++{item.id}</td>
            <td>--{item.name}</td>
          </tr>
        ))} */}
      </tbody>
    </table>
  );
};

export default TableComponent;
