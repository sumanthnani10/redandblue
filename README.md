# Red & Blue Appliances Service

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

A professional appliance repair service website built with Node.js and Express. Browse services by appliance type, learn about the company, and get in touch for same-day repair scheduling.

## Features

- **Home** — Landing page with service overview and same-day service messaging
- **Services** — Detailed pages for 8 appliance categories with common issues and supported types
- **About Us** — Company information and background
- **Contact** — Booking and inquiry form
- **Responsive design** — Bootstrap-based layout for mobile and desktop

### Supported Appliance Categories

| Appliance | Description |
|-----------|-------------|
| Refrigerator | Top-freezer, French door, side-by-side, built-in, and more |
| Hood | Wall-mounted, under-cabinet, island, downdraft |
| Dishwasher | Built-in, portable, drawer, smart |
| Stoves | Gas, electric, induction, dual fuel |
| Microwave | Countertop, over-the-range, built-in, convection |
| Ice Machine | Undercounter, built-in, commercial, nugget |
| Washer & Dryer | Top-load, front-load, stackable, laundry center |
| Wall Oven | Single, double, convection, steam |

## Tech Stack

- **Runtime:** Node.js
- **Framework:** [Express](https://expressjs.com/)
- **Template Engine:** [EJS](https://ejs.co/)
- **Database:** [Mongoose](https://mongoosejs.com/) (MongoDB) — available for future use

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (included with Node.js)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/redandblue.git
   cd redandblue
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   node index.js
   ```

4. Open [http://localhost:4746](http://localhost:4746) in your browser.

## Project Structure

```
redandblue/
├── controllers/          # Route handlers
│   ├── aboutController.js
│   ├── contactController.js
│   ├── homeController.js
│   └── servicesController.js
├── routes/
│   └── routes.js         # Route definitions
├── views/                # EJS templates and static assets
│   ├── assets/           # Images, icons, logos
│   ├── css/
│   ├── js/
│   ├── home.ejs
│   ├── aboutus.ejs
│   ├── contact.ejs
│   └── services.ejs
├── index.js              # Application entry point
└── package.json
```

## Configuration

The server runs on port **4746** by default. To change it, edit `PORT` in `index.js`:

```javascript
PORT = 4746  // Change to your desired port
```

## License

This project is licensed under the ISC License — see the [LICENSE](LICENSE) file for details.
