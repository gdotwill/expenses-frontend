/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalState";

import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Expenses React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// eslint-disable-next-line react/prop-types
function Transaction({ color, icon, name, description, value, transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <MDBox key={name} component="li" py={1} pr={2} mb={1}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center">
        <MDBox display="flex" alignItems="center" mb={1}>
          <MDBox mr={2}>
            <MDButton variant="outlined" color={color} iconOnly circular>
              <Icon sx={{ fontWeight: "bold" }}>{icon}</Icon>
            </MDButton>
          </MDBox>
          <MDBox display="flex" flexDirection="column" width={300}>
            <MDTypography variant="button" fontWeight="medium" gutterBottom>
              {transaction.text}
            </MDTypography>
          </MDBox>
        </MDBox>

        <MDTypography variant="button" color={color} fontWeight="medium" textGradient>
          <span>{transaction.amount > 0 ? "+" : "-"}</span>
          {Math.abs(transaction.amount)}
        </MDTypography>

        <MDBox mr={1}>
          <MDButton variant="text" color="error" onClick={() => deleteTransaction(transaction._id)}>
            <Icon>delete</Icon>&nbsp;delete
          </MDButton>
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

// Typechecking props of the Transaction
Transaction.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]).isRequired,
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Transaction;
