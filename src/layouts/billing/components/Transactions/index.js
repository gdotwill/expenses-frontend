import React, { useContext, useEffect } from "react";

import Card from "@mui/material/Card";

// Expenses React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDButton from "components/MDButton";

// Billing page components
import Transaction from "layouts/billing/components/Transaction";

import { GlobalContext } from "../../../../context/GlobalState";

function Transactions() {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Transactions
        </MDTypography>
      </MDBox>
      <MDBox pt={3} pb={2} px={2}>
        <MDBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          {transactions.map((transaction) => (
            <Transaction
              key={transaction._id}
              transaction={transaction}
              icon={transaction.amount > 0 ? "expand_less" : "expand_more"}
              color={transaction.amount > 0 ? "success" : "error"}
            />
          ))}
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Transactions;
