import "dotenv/config.js"
import "../../config/database.js"
import Stores from "../Store.js";

const stores = [
  {
    name: "El Rincón del Sabor",
    address: "Calle 16 #20-22, Bogotá",
    phoneNumber: 3109876543
  },
  {
    name: "Tecnología Express",
    address: "Carrera 18 #32-15, Medellín",
    phoneNumber: 3201234567
  },
  {
    name: "Moda Urbana",
    address: "Calle 12 #10-30, Cali",
    phoneNumber: 3156789123
  },
  {
    name: "La Casa de las Flores",
    address: "Carrera 22 #8-45, Barranquilla",
    phoneNumber: 3198765432
  },
  {
    name: "Panadería La Tradición",
    address: "Calle 9 #25-18, Cartagena",
    phoneNumber: 3172345678
  }
];

  Stores.insertMany(stores)