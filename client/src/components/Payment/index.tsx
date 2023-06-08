import PageHeader from '../PageHeader'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DeleteIcon from '@mui/icons-material/Delete'
import {
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
  PaymentSettingButton
} from './index.styles'
import VisaImg from '../../assets/images/payment-method/visa.png'

interface Props {}

function Payment ({}: Props) {
  return (
    <>
      <PageHeader pageName="Payment Setting" withCartIcon={true} />

      <div style={{ padding: '0 20px' }}>
        <div
          className="container pageDefaultStyle"
          style={{ padding: '20px 0' }}
        >
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

          <div className="paymentMethodSetting">
            <h5>Recently used payment method</h5>
            <RecentlyUsedPaymentMethods>
              <li>
                <img src={VisaImg} alt="" />
                <PaymentMethodInfo>
                  <PaymentMethodHeader>
                    <PaymentMethodNumber>
                      4643 4543 25** ****
                    </PaymentMethodNumber>
                    <DeleteIcon />
                  </PaymentMethodHeader>
                  <PaymentMethodInfoSpan>
                    Expire on 2027 Oct 30
                  </PaymentMethodInfoSpan>
                  <PaymentMethodActions>
                    <PaymentMethodInfoA href="#">
                      Edit payment method <ModeEditIcon />
                    </PaymentMethodInfoA>
                    <PaymentMethodInfoA href="#">
                      Set as default
                    </PaymentMethodInfoA>
                  </PaymentMethodActions>
                </PaymentMethodInfo>
              </li>
              <li>
                <img src={VisaImg} alt="" />
                <PaymentMethodInfo>
                  <PaymentMethodHeader>
                    <PaymentMethodNumber>
                      4643 4543 25** ****
                    </PaymentMethodNumber>
                    <DeleteIcon />
                  </PaymentMethodHeader>
                  <PaymentMethodInfoSpan>
                    Expire on 2027 Oct 30
                  </PaymentMethodInfoSpan>
                  <PaymentMethodActions>
                    <PaymentMethodInfoA href="#">
                      Edit payment method <ModeEditIcon />
                    </PaymentMethodInfoA>
                    <PaymentMethodInfoA href="#">
                      Set as default
                    </PaymentMethodInfoA>
                  </PaymentMethodActions>
                </PaymentMethodInfo>
              </li>
            </RecentlyUsedPaymentMethods>
          </div>
          <PaymentSettingButton>Add new payment method</PaymentSettingButton>
        </div>
      </div>
    </>
  )
}

export default Payment
