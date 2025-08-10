require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // 👈 Your verified domain
      to: email,
      subject: "🎉 Thanks for subscribing to SynkVerse!",
      html: `
        <h2>Welcome to SynkVerse 🚀</h2>
        <p>We're thrilled to have you. Stay tuned for updates!</p>
      `,
    });

    console.log("Email sent:", data);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ success: false, error: err });
  }
});

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
