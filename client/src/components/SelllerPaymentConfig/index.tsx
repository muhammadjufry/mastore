import SellerPageHeader from "../SellerPageHeader";
import { IconCircleCheckFilled, IconEdit } from "@tabler/icons-react";
import { Button } from "@mantine/core";
import {
  PaymentSetting,
  PaymentEmailSetting,
  SendEmailToMyAccountAndRadio,
  SpanAndRadio,
  RecentlyUsedPaymentMethods,
  PaymentMethodInfo,
  PaymentMethodHeader,
  PaymentMethodInfoSpan,
  PaymentMethodInfoA,
  PaymentMethodActions,
  PaymentMethodNumber,
  PaymentSettingButton,
} from "./index.styles";
import VisaImg from "../../assets/images/payment-method/visa.png";

type Props = {
  isUserLoggedIn: boolean;
};

function Payment({ isUserLoggedIn }: Props) {
  return (
    <>
      <SellerPageHeader pageName="Payment Setting" />
      <div className="pageDefaultStyle">
        <div className="container">
          <PaymentEmailSetting>
            <h5>Contact email</h5>
            <span>Where your invoices should be sent?</span>
            <SendEmailToMyAccountAndRadio>
              <input type="radio" name="sendInvoicesToEmail" id="" checked />
              <span>Send to my account email</span>
            </SendEmailToMyAccountAndRadio>
            <div className="sendToAlternativeEmail">
              <SpanAndRadio>
                <input type="radio" name="sendInvoicesToEmail" id="" />
                <span>Send to an alternative email</span>
              </SpanAndRadio>
              <input
                type="email"
                name=""
                id=""
                placeholder="youralternativeemail@domain.com"
              />
            </div>
          </PaymentEmailSetting>
          <br />
          <div className="paymentMethodSetting">
            <h5>Send money to this payment method:</h5>
            <RecentlyUsedPaymentMethods>
              <li>
                <img src={VisaImg} alt="" />
                <PaymentMethodInfo>
                  <PaymentMethodHeader>
                    <PaymentMethodNumber>
                      4643 4543 25** ****
                    </PaymentMethodNumber>
                    <IconCircleCheckFilled />
                  </PaymentMethodHeader>
                  <PaymentMethodInfoSpan>
                    Expire on 2027 Oct 30
                  </PaymentMethodInfoSpan>
                  <PaymentMethodActions>
                    <PaymentMethodInfoA href="#">
                      Edit payment method <IconEdit />
                    </PaymentMethodInfoA>
                    <PaymentMethodInfoA href="#">
                      Set as default
                    </PaymentMethodInfoA>
                  </PaymentMethodActions>
                </PaymentMethodInfo>
              </li>
            </RecentlyUsedPaymentMethods>
          </div>
          <br />
          <Button
            color="dark"
            size="xs"
            styles={() => ({
              root: {
                width: "fit-content",
              },
            })}
          >
            Add new payment method
          </Button>
        </div>
      </div>
    </>
  );
}

export default Payment;
