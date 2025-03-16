import React from "react";
import { Box, Typography, Container, Paper, Link } from "@mui/material";

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
          Terms and Conditions
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 4, color: "text.secondary" }}>
          For Delivery Personnel
        </Typography>

        <Box sx={{ lineHeight: 1.6 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", mt: 3 }}>
            1. Acceptance of Terms
          </Typography>
          <Typography variant="body1" paragraph>
            By applying for the position of Delivery Personnel with Feel The Care, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not proceed with your application.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", mt: 3 }}>
            2. Job Responsibilities
          </Typography>
          <Typography variant="body1" paragraph>
            As a Delivery Personnel, you will be responsible for:
          </Typography>
          <ul>
            <li>Delivering food and medicine to train travelers in a timely and professional manner.</li>
            <li>Ensuring the safety and quality of the delivered items.</li>
            <li>Maintaining proper communication with the operations team.</li>
            <li>Following all traffic rules and regulations while on duty.</li>
          </ul>

          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", mt: 3 }}>
            3. Eligibility Criteria
          </Typography>
          <Typography variant="body1" paragraph>
            To be eligible for this role, you must:
          </Typography>
          <ul>
            <li>Be between 18 and 50 years of age.</li>
            <li>Possess a valid driving license.</li>
            <li>Have access to a bike or cycle for deliveries.</li>
            <li>Be physically fit to perform delivery duties.</li>
          </ul>

          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", mt: 3 }}>
            4. Code of Conduct
          </Typography>
          <Typography variant="body1" paragraph>
            You agree to:
          </Typography>
          <ul>
            <li>Treat all customers with respect and professionalism.</li>
            <li>Maintain the confidentiality of customer information.</li>
            <li>Report any issues or delays in delivery to the operations team immediately.</li>
            <li>Not engage in any illegal or unethical activities while on duty.</li>
          </ul>

          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", mt: 3 }}>
            5. Payment and Compensation
          </Typography>
          <Typography variant="body1" paragraph>
            - You will be compensated based on the number of successful deliveries made.
            - Payments will be processed weekly via bank transfer or other agreed-upon methods.
            - Any disputes regarding payment must be reported within 7 days of payment receipt.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", mt: 3 }}>
            6. Termination
          </Typography>
          <Typography variant="body1" paragraph>
            Feel The Care reserves the right to terminate your engagement if:
          </Typography>
          <ul>
            <li>You fail to meet the performance standards.</li>
            <li>You violate the code of conduct or terms of this agreement.</li>
            <li>You engage in any fraudulent or illegal activities.</li>
          </ul>

          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", mt: 3 }}>
            7. Liability
          </Typography>
          <Typography variant="body1" paragraph>
            - Feel The Care is not responsible for any accidents or injuries that occur during deliveries.
            - You are required to have valid insurance for your vehicle.
            - You are responsible for any damages caused to the delivered items due to negligence.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", mt: 3 }}>
            8. Amendments
          </Typography>
          <Typography variant="body1" paragraph>
            Feel The Care reserves the right to modify these Terms and Conditions at any time. You will be notified of any changes, and continued engagement with us constitutes acceptance of the updated terms.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", mt: 3 }}>
            9. Contact Information
          </Typography>
          <Typography variant="body1" paragraph>
            For any questions or concerns regarding these Terms and Conditions, please contact us at:
          </Typography>
          <Typography variant="body1" paragraph>
            Email: <Link href="mailto:support@feelthecare.com">support@feelthecare.com</Link>
            <br />
            Phone: <Link href="tel:+1234567890">+1 234 567 890</Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default TermsAndConditions;