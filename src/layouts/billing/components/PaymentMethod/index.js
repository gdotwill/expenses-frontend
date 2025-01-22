import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalState";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Expenses React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Expenses React context
import { useMaterialUIController } from "context";
import MDInput from "components/MDInput";

function PaymentMethod() {
  const [controller] = useMaterialUIController();

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  const maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(0, object.target.maxLength);
    }
    const numericValue = text.replace(/[^0-9]/g, "");
  };

  return (
    <Card id="delete-account" component="form" role="form" onSubmit={onSubmit}>
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Add new transaction
        </MDTypography>
        <MDButton onClick={onSubmit} variant="gradient" color="dark">
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;add transaction
        </MDButton>
      </MDBox>
      <MDBox p={2} lg={9}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <MDInput
              value={text}
              onChange={(e) => setText(e.target.value)}
              label="Add description"
              inputProps={{ maxLength: 10 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <MDInput
              value={Boolean(amount) ? amount : ""}
              onChange={(e) => setAmount(e.target.value * 1)}
              label="Add amount"
              type="number"
              inputProps={{ minLength: 0, maxLength: 5 }}
              onInput={maxLengthCheck}
            />
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default PaymentMethod;
