import React from "react";
import "./pay.css";
import barrierfree from "./imgs/barrierfree.jpg";
import clock from "./imgs/clock.png";
import card from "./imgs/card.jpg";
import alipay from "./imgs/alipay.jpg";
import wepay from "./imgs/wepay.jpg";
import onlinebank from "./imgs/onlinebank.jpg";
function PaymentPage() {
  return (
    <div className="pay-page">
      <div className="header">
        <div
          style={{
            width: "800px",
            height: "80px",
            margin: "auto",
            display: "flex",
          }}
        >
          <h1>安全支付</h1>
          <button className="barrierFree">
            <img
              src={barrierfree}
              alt="barrierfree"
              className="barrierFreePic"
            />
          </button>
        </div>
      </div>
      <div className="pay-content">
        <div className="orderDetail">
          <div className="orderDetailLeft">
            <div className="amount">
              <span className="amount-label">订单金额</span>
              <span
                style={{
                  color: "#fa6909",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                ￥
              </span>
              <span className="amount-content">983.00</span>
            </div>
            <div className="leftTime">
              <img src={clock} alt="clock" style={{ height: "13px" }}></img>
              <span className="leftTime-content">剩余时间</span>
              <span
                style={{
                  color: "#fa6909",
                  fontSize: "13px",
                  fontWeight: "bold",
                }}
              >
                00:12:12
              </span>
              <span className="leftTime-content">
                &nbsp;，超时订单可能被取消
              </span>
            </div>
          </div>
          <div className="route">
            <div className="route-label">往返机票 - XX - XX</div>
            <div className="route-content">
              去程 XX - XX 出发时间：2023-01-01 10:00:00
              <br />
              返程 XX - XX 出发时间：2023-01-02 10:00:00
              <br />
              返程 XX - XX 出发时间：2023-01-02 20:00:00
              <br />
              乘机人：XXX
              <br />
            </div>
          </div>
        </div>
        <div className="prepareToPay">
          <form className="paymentSelect">
            <div className="payMethod">
              <input type="radio" name="payment" id="existingCard" checked />
              &nbsp;&nbsp;
              <label for="existingCard">
                <img src={card} alt="card" style={{ height: "15px" }}></img>
                招商银行 储蓄卡 (0000)
              </label>
            </div>
            <div className="payMethod">
              <input type="radio" name="payment" id="newCard" />
              {/* 通过id嵌套label使点击label就可以选中 */}
              &nbsp;&nbsp;<label for="newCard">添加新卡支付</label>
            </div>
          </form>

          <button className="submitPayment">银行卡支付 ￥963.00</button>
        </div>
        <div className="otherPayments">
          <button className="payment">
            <img src={alipay} alt="alipay"></img> 支付宝
          </button>

          <button className="payment">
            <img src={wepay} alt="wepay"></img> 微信支付
          </button>

          <button className="payment">
            <img src={onlinebank} alt="onlinebank"></img> 网上银行
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
