import { CampaignEntry, CampaignInfo } from "../../types/campaigns";

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

export const EXAMPLE_CAMPAIGNS: CampaignInfo[] = [
  {
    name: "My First Campaign",
    id: "192833395485",
    propertyId: "48498498454",
    duration: 14,
    startDate: new Date(),
    config: {
      tone: "Funny",
      textLength: 1400,
    },
  },
  {
    name: "My Second Campaign",
    id: "192833395485",
    propertyId: "48498498454",
    duration: 14,
    startDate: new Date(),
    config: {
      tone: "Funny",
      textLength: 1400,
    },
  },
  {
    name: "My Third Campaign",
    id: "192833395485",
    propertyId: "48498498454",
    duration: 14,
    startDate: new Date(),
    config: {
      tone: "Funny",
      textLength: 1400,
    },
  },
  {
    name: "My Fourth Campaign",
    id: "192833395485",
    propertyId: "48498498454",
    duration: 14,
    startDate: new Date(),
    config: {
      tone: "Funny",
      textLength: 1400,
    },
  },
  {
    name: "My Fifth Campaign",
    id: "192833395485",
    propertyId: "48498498454",
    duration: 14,
    startDate: new Date(),
    config: {
      tone: "Funny",
      textLength: 1400,
    },
  },
];

export const EXAMPLE_CAMPAIGN_ENTRIES: CampaignEntry[] = [
  {
    id: "1",
    subject: "New Biscuits Campaign",
    propertyId: "#123",
    dispatchDate: new Date("03/20/2025"),
    demoId: "#456",
  },
  {
    id: "2",
    subject: "Jelly Recall Announcement",
    propertyId: "#123",
    dispatchDate: new Date("05/17/2025"),
    demoId: "#456",
  },
  {
    id: "3",
    subject: "Jelly RE-recall Announcement",
    propertyId: "#123",
    dispatchDate: new Date("05/17/2025"),
    demoId: "#456",
  },
  {
    id: "4",
    subject: "New Jelly Announcement",
    propertyId: "#123",
    demoId: "#988",
    dispatchDate: new Date("05/17/2025"),
  },
  {
    id: "5",
    subject: "New Jelly Announcement",
    propertyId: "#123",
    demoId: "#988",
    dispatchDate: new Date("05/17/2025"),
  },
  {
    id: "6",
    subject: "New Jelly Announcement",
    propertyId: "#123",
    demoId: "#988",
    dispatchDate: new Date("05/17/2025"),
  },
  {
    id: "7",
    subject: "New Jelly Announcement",
    propertyId: "#123",
    demoId: "#988",
    dispatchDate: new Date("05/17/2025"),
  },
  {
    id: "8",
    subject: "New Jelly Announcement",
    propertyId: "#123",
    demoId: "#988",
    dispatchDate: new Date("05/17/2025"),
  },
  {
    id: "9",
    subject: "New Jelly Announcement",
    propertyId: "#123",
    demoId: "#988",
    dispatchDate: new Date("05/17/2025"),
  },
  {
    id: "10",
    subject: "New Jelly Announcement",
    propertyId: "#123",
    demoId: "#988",
    dispatchDate: new Date("05/17/2025"),
  },
];
