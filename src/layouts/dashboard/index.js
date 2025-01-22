import React, { useState, useContext } from "react";

import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Transactions from "layouts/billing/components/Transactions";

import { GlobalContext } from "../../context/GlobalState";

function Dashboard() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  const income = amounts.filter((item) => item > 0).reduce((acc, item) => (acc += item), 0);

  const expense = amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) * -1;

  return (
    <DashboardLayout>
      <MDBox py={3} mt={5}>
        <Grid container spacing={3}>
          <Grid xs={12} md={6} lg={2.5}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="euro"
                title="Total Balance"
                count={total}
                percentage={{
                  color: "success",
                  label: "Overall Total Balance",
                }}
              />
            </MDBox>
          </Grid>
          <Grid xs={12} mx={3} md={6} lg={2.5}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="addcircle"
                title="Total Income"
                count={income}
                percentage={{
                  color: "success",
                  label: "Overall Total Income",
                }}
              />
            </MDBox>
          </Grid>
          <Grid xs={12} md={6} lg={2.5}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="error"
                icon="remove"
                title="Total Expense"
                count={expense}
                percentage={{
                  color: "success",
                  label: "Overall Total Expense",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <Grid my={3} container spacing={3}>
          <Grid lg={8}>
            <PaymentMethod />
          </Grid>
        </Grid>
        <Grid my={3} container spacing={3}>
          <Grid lg={8}>
            <Transactions />
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
