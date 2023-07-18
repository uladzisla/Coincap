import React, { useState } from "react";
import styles from "./modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleStatus } from "../../redux/modal_on_off";
import { CloseOutlined } from "@ant-design/icons";

const ModalComponent = () => {
  // Данные для таблицы
  const state = useSelector((store) => store.stateModal.status);
  //   const data = useSelector((store) => store.currentCoin.data);
  //   console.log(state);
  const data = useSelector((store) => store.caseStore.finalObjectCase);
  // const quontity = useSelector((store) => store.caseStore.quontity);
  const dispatch = useDispatch();
  const count = useSelector((store) => store.caseStore.count);
  console.log(data);
  return (
    <>
      {" "}
      {state && (
        <div className={styles["modal-container"]}>
          <div className={styles["modal-content"]}>
            {/* Здесь разместите содержимое вашего модального окна */}
            <h3>Ваш портфель</h3>
            <div>
              <div className={styles.table1}>
                <table className={styles.table1}>
                  <thead>
                    <tr>
                      <th>Название</th>
                      <th>Цена</th>
                      <th>Количество</th>
                      <th>Итого</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      console.log(item);
                      return (
                        <tr key={item.id}>
                          {/* <td>{item[index].name}</td> */}
                          <td>{item[index].priceUsd}</td>
                          <td>{data[index].quontity}</td>
                          <td>
                            {parseFloat(item[index].priceUsd).toFixed() *
                              data[index].quontity}
                            $
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="3">ВСЕГО</td>
                      <td>{count}$</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <button onClick={() => dispatch(toggleStatus(state))}>
              close
              <CloseOutlined />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComponent;
