import React from "react";
import SellerPageHeader from "../SellerPageHeader";
import { SellerSettingLists } from "./index.styles";

type Props = {};

function index({}: Props) {
  return (
    <>
      <SellerPageHeader pageName="Seller Settings" />
      <div style={{ padding: "0 20px" }}>
        <div
          className="container pageDefaultStyle"
          style={{ padding: "20px 0" }}
        >
          <SellerSettingLists>
            <li>Seller info</li>
            <li>Edit seller profile</li>
            <li>Change phone number</li>
            <li>Change address/location</li>
            <li>Update payment info</li>
            <li>Chat notification</li>
            <li>Delete seller account</li>
            <li>Close my seller account</li>
            <li>Logout</li>
          </SellerSettingLists>
        </div>
      </div>
    </>
  );
}

export default index;
