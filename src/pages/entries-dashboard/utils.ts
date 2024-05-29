import { CampaignEntry } from "../../store/dashboard/campaigns/types";

export const EXAMPLE_EMAIL_MARKDOWN = `# 🌟 Welcome to Our Exclusive New Product Sale! 🌟

Dear Valued Customer,

We are thrilled to announce our latest collection of products, now available at unbeatable prices! Whether you're looking for the latest in tech, fashion, home goods, or more, we've got you covered. Don't miss out on these limited-time offers to upgrade your lifestyle without breaking the bank.

## 📱 Tech Gadgets

**Smartphone XYZ**
- Original Price: $999
- **Sale Price: $799**
- Features: 5G connectivity, 128GB storage, 48MP camera

**Wireless Earbuds Pro**
- Original Price: $199
- **Sale Price: $149**
- Features: Noise-cancellation, 24-hour battery life, water-resistant

## 👗 Fashion Essentials

**Designer Handbag**
- Original Price: $299
- **Sale Price: $199**
- Features: Genuine leather, adjustable strap, multiple compartments

**Men's Casual Blazer**
- Original Price: $149
- **Sale Price: $99**
- Features: Slim fit, available in various colors, wrinkle-resistant

## 🏠 Home & Kitchen

**Air Fryer Deluxe**
- Original Price: $129
- **Sale Price: $89**
- Features: 5.8-quart capacity, digital touch screen, 7 cooking presets

**Memory Foam Mattress**
- Original Price: $599
- **Sale Price: $399**
- Features: Pressure relief, hypoallergenic, 10-year warranty

## 🎁 Special Offers

- **Buy One Get One Free** on select skincare products
- **Free Shipping** on orders over $50
- **Additional 10% Off** your first purchase with code: **NEW10**

## 🛒 Shop Now!

Visit our [website](https://www.your-ecommerce-site.com) to explore the full range of new products on sale. Hurry, these deals won't last long!

Thank you for choosing us for your shopping needs. We are committed to bringing you the best products at the best prices.

Happy Shopping!

Best regards,  
The E-Commerce Team

---

### 📧 Stay Connected

- [Facebook](https://www.facebook.com/yourecommerce)
- [Twitter](https://www.twitter.com/yourecommerce)
- [Instagram](https://www.instagram.com/yourecommerce)

For any inquiries, feel free to contact our customer support at support@yourecommerce.com or call us at 1-800-123-4567.

---

© 2024 Your E-Commerce Site. All rights reserved.  
You are receiving this email because you opted in at our website. If you prefer not to receive promotional emails, [unsubscribe here](https://www.your-ecommerce-site.com/unsubscribe).
`;

export const EXAMPLE_EMAIL_SUBJECT = `Don't Miss Out! Huge Sale & Exciting New Products`;

export const EXAMPLE_CAMPAIGN_ENTRIES: CampaignEntry[] = [
  {
    dispatchDate: new Date("03/11/2024"),
    createdDate: new Date("03/10/2024"),
    subject: "This Is A New Email I Made IV",
    markdownContent: "",
  },
  {
    dispatchDate: new Date("03/10/2024"),
    createdDate: new Date("03/09/2024"),
    subject: "This Is A New Email I Made IV",
    markdownContent: "",
  },
  {
    dispatchDate: new Date("03/10/2023"),
    createdDate: new Date("03/09/2023"),
    subject: "This Is A New Email I Made III",
    markdownContent: "",
  },
  {
    dispatchDate: new Date("03/10/2022"),
    createdDate: new Date("03/09/2022"),
    subject: "This Is A New Email I Made II",
    markdownContent: "",
  },
  {
    dispatchDate: new Date("03/10/2021"),
    createdDate: new Date("03/09/2021"),
    subject: "This Is A New Email I Made",
    markdownContent: "",
  },
];
