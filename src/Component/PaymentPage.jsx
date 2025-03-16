import React, { useState } from "react";
import { Box, Typography, Button, Container, Paper, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google"; // Google Pay
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"; // Paytm and PhonePe

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("upi"); // State to track selected payment method

  const handlePayment = () => {
    if (paymentMethod === "upi") {
      console.log("UPI Payment processed...");
    } else if (paymentMethod === "cod") {
      console.log("Cash on Delivery selected...");
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        padding: "20px 0",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}
        >
          Payment Section
        </Typography>

        <Paper sx={{ padding: "20px", mb: 4 }}>
          {/* Payment Method Selection */}
          <FormControl component="fieldset" sx={{ mb: 4 }}>
            <FormLabel component="legend">Select Payment Method</FormLabel>
            <RadioGroup
              row
              aria-label="payment method"
              name="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <FormControlLabel
                value="upi"
                control={<Radio />}
                label="UPI Payment"
              />
              <FormControlLabel
                value="cod"
                control={<Radio />}
                label="Cash on Delivery"
              />
            </RadioGroup>
          </FormControl>

          {paymentMethod === "upi" && (
            <>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Enter Your UPI Payment Details
              </Typography>
              <TextField
                label="Enter UPI ID (example: user@upi)"
                variant="outlined"
                fullWidth
                sx={{ mb: 3 }}
                placeholder="user@upi"
              />
              {/* UPI Payment Method Selection */}
              <Typography variant="body1" sx={{ mb: 2 }}>
                Choose your preferred UPI payment method:
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  mb: 4,
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    border: "1px solid #ddd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    "&:hover": { backgroundColor: "#f1f1f1" },
                  }}
                >
                  <GoogleIcon sx={{ color: "#4285F4", mr: 1 }} />
                  Google Pay
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    border: "1px solid #ddd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    "&:hover": { backgroundColor: "#f1f1f1" },
                  }}
                >
                  <AccountBalanceWalletIcon sx={{ color: "#673AB7", mr: 1 }} />
                  PhonePe
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    border: "1px solid #ddd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    "&:hover": { backgroundColor: "#f1f1f1" },
                  }}
                >
                  <AccountBalanceWalletIcon sx={{ color: "#00AEEF", mr: 1 }} />
                  Paytm
                </Button>
              </Box>
              <Typography variant="body2" sx={{ color: "#555", mb: 3 }}>
                After entering your UPI ID, click "Pay Now" to initiate the payment. You will be redirected to your preferred UPI app (e.g., Google Pay or PhonePe) to complete the payment process.
              </Typography>
            </>
          )}

          {paymentMethod === "cod" && (
            <>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Cash on Delivery Selected
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                You have selected Cash on Delivery as your payment method. Pay the total amount to the delivery agent upon receiving your order.
              </Typography>
            </>
          )}

          {/* Proceed to Payment Button */}
          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#007bff",
                "&:hover": { backgroundColor: "#0056b3" },
              }}
              onClick={handlePayment}
            >
              {paymentMethod === "upi" ? "Pay Now" : "Confirm COD"}
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default PaymentPage;
