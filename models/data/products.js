import "dotenv/config.js"
import "../../config/database.js"
import Products from "../Product.js";

const products = [
    { 
    name: "Camiseta Clásica",
    brand: "Hanes",
    type: "Ropa",
    price: 15.99 
    },
    { 
    name: "Zapatos para Correr", 
    brand: "Nike",
    type: "Calzado",
    price: 75.50 
    },
    { 
    name: "Computadora Portátil", 
    brand: "Dell",
    type: "Electrónica",
    price: 1200.00 
    },
    { 
    name: "Ratón Inalámbrico", 
    brand: "Logitech",
    type: "Accesorios",
    price: 20.99 
    },
    { 
    name: "Café Orgánico", 
    brand: "Starbucks",
    type: "Alimentos",
    price: 10.50 
    },
    { 
    name: "Teléfono Inteligente", 
    brand: "Samsung",
    type: "Electrónica",
    price: 899.99 
    },
    { 
    name: "Mochila", 
    brand: "Jansport",
    type: "Accesorios",
    price: 45.00 
    },
    { 
    name: "Jeans", 
    brand: "Levi's",
    type: "Ropa",
    price: 49.99 
    },
    { 
    name: "Gafas de Sol", 
    brand: "Ray-Ban",
    type: "Accesorios",
    price: 150.00 
    },
    { 
    name: "Hervidor Eléctrico", 
    brand: "Philips",
    type: "Electrodomésticos",
    price: 29.99 
    },
    { 
    name: "Colchoneta de Yoga", 
    brand: "Lululemon",
    type: "Deportes",
    price: 35.00 
    },
    { 
    name: "Licuadora", 
    brand: "NutriBullet",
    type: "Electrodomésticos",
    price: 79.99 
    },
    { 
    name: "Billetera de Cuero", 
    brand: "Tommy Hilfiger",
    type: "Accesorios",
    price: 40.00 
    },
    { 
    name: "Altavoz Bluetooth", 
    brand: "JBL",
    type: "Electrónica",
    price: 59.99 
    },
    { 
    name: "Auriculares Inalámbricos", 
    brand: "Apple",
    type: "Electrónica",
    price: 129.99 
    },
    { 
    name: "Perfume", 
    brand: "Chanel",
    type: "Fragancia",
    price: 99.99 
    },
    { 
    name: "Balón de Baloncesto", 
    brand: "Spalding",
    type: "Deportes",
    price: 24.99 
    },
    { 
    name: "Reloj Digital", 
    brand: "Casio",
    type: "Accesorios",
    price: 45.99 
    },
    { 
    name: "Cuaderno", 
    brand: "Moleskine",
    type: "Papelería",
    price: 15.00 
    },
    { 
    name: "Botella de Agua", 
    brand: "Hydro Flask",
    type: "Accesorios",
    price: 25.00 
    },
    { 
    name: "Silla de Gaming", 
    brand: "Secretlab",
    type: "Muebles",
    price: 399.99 
    },
    { 
    name: "Tableta", 
    brand: "Apple",
    type: "Electrónica",
    price: 499.99 
    },
    { 
    name: "Audífonos", 
    brand: "Sony",
    type: "Electrónica",
    price: 150.00 
    },
    { 
    name: "Cámara de Acción", 
    brand: "GoPro",
    type: "Electrónica",
    price: 249.99 
    },
    { 
    name: "Tienda de Campaña", 
    brand: "Coleman",
    type: "Aire Libre",
    price: 89.99 
    },
    { 
    name: "Chaqueta para Correr", 
    brand: "Adidas",
    type: "Ropa",
    price: 55.00 
    },
    { 
    name: "Cepillo de Dientes Eléctrico", 
    brand: "Oral-B",
    type: "Electrodomésticos",
    price: 39.99 
    },
    { 
    name: "Set de Cuidado Facial", 
    brand: "Neutrogena",
    type: "Belleza",
    price: 30.00 
    },
    { 
    name: "Zapatillas", 
    brand: "Puma",
    type: "Calzado",
    price: 65.00 
    },
    { 
    name: "Silla de Oficina", 
    brand: "Herman Miller",
    type: "Muebles",
    price: 850.00 
    },
    { 
    name: "Lámpara de Escritorio", 
    brand: "Ikea",
    type: "Muebles",
    price: 19.99 
    },
    { 
    name: "Taladro Eléctrico", 
    brand: "Bosch",
    type: "Herramientas",
    price: 99.99 
    },
    { 
    name: "Juego de Sartenes", 
    brand: "Tefal",
    type: "Cocina",
    price: 79.99 
    },
    { 
    name: "Champú", 
    brand: "Head & Shoulders",
    type: "Cuidado Personal",
    price: 8.50 
    },
    { 
    name: "Bicicleta de Montaña", 
    brand: "Trek",
    type: "Aire Libre",
    price: 599.99 
    },
    { 
    name: "Refrigerador", 
    brand: "LG",
    type: "Electrodomésticos",
    price: 799.99 
    },
    { 
    name: "Cafetera", 
    brand: "Nespresso",
    type: "Electrodomésticos",
    price: 199.99 
    },
    { 
    name: "Chaqueta Impermeable", 
    brand: "The North Face",
    type: "Ropa",
    price: 120.00 
    },
    { 
    name: "Balón de Fútbol", 
    brand: "Adidas",
    type: "Deportes",
    price: 30.00 
    },
    { 
    name: "Patinete Eléctrico", 
    brand: "Xiaomi",
    type: "Electrónica",
    price: 299.99 
    },
    { 
    name: "Sofá", 
    brand: "Ashley Furniture",
    type: "Muebles",
    price: 450.00 
    },
    { 
    name: "Sartén", 
    brand: "Lodge",
    type: "Cocina",
    price: 25.00 
    },
    { 
    name: "Lápiz Labial", 
    brand: "Maybelline",
    type: "Belleza",
    price: 9.99 
    },
    { 
    name: "Zapatos Formales", 
    brand: "Clarks",
    type: "Calzado",
    price: 85.00 
    },
    { 
    name: "Botas para Caminata", 
    brand: "Merrell",
    type: "Calzado",
    price: 120.00 
    },
    { 
    name: "Horno de Microondas", 
    brand: "Samsung",
    type: "Electrodomésticos",
    price: 150.00 
    },
    { 
    name: "Cargador Portátil", 
    brand: "Anker",
    type: "Electrónica",
    price: 19.99 
    },
    { 
    name: "Organizador de Escritorio", 
    brand: "Office Depot",
    type: "Papelería",
    price: 12.99 
    },
    { 
    name: "Zapatillas Casual", 
    brand: "Vans",
    type: "Calzado",
    price: 60.00 
    },
    { 
    name: "Detergente para Ropa", 
    brand: "Tide",
    type: "Hogar",
    price: 15.99 
    },
    { 
    name: "Vela Aromática", 
    brand: "Yankee Candle",
    type: "Hogar",
    price: 22.99 
    },
    { 
    name: "Televisor LED", 
    brand: "Sony",
    type: "Electrónica",
    price: 699.99 
    },
    { 
    name: "Set de Toallas de Baño", 
    brand: "Ralph Lauren",
    type: "Hogar",
    price: 40.00 
    },
    { 
    name: "Secador de Pelo", 
    brand: "Dyson",
    type: "Electrodomésticos",
    price: 299.99 
    },
    { 
    name: "Reloj Inteligente", 
    brand: "Garmin",
    type: "Electrónica",
    price: 250.00 
    },
    { 
    name: "Máquina de Espresso", 
    brand: "De'Longhi",
    type: "Electrodomésticos",
    price: 349.99 
    },
    { 
    name: "Alfombra", 
    brand: "Ikea",
    type: "Hogar",
    price: 70.00 
    },
    { 
    name: "Cinturón de Cuero", 
    brand: "Calvin Klein",
    type: "Accesorios",
    price: 35.00 
    },
    { 
    name: "Cámara Digital", 
    brand: "Canon",
    type: "Electrónica",
    price: 450.00 
    },
    { 
    name: "Funda para Tableta", 
    brand: "OtterBox",
    type: "Accesorios",
    price: 30.00 
    },
    { 
    name: "Abrigo de Invierno", 
    brand: "Columbia",
    type: "Ropa",
    price: 150.00 
    },
    { 
    name: "Cargador Inalámbrico", 
    brand: "Belkin",
    type: "Electrónica",
    price: 24.99 
    },
    { 
    name: "Reloj de Pared", 
    brand: "Seiko",
    type: "Hogar",
    price: 35.00 
    },
    { 
    name: "Consola de Juegos", 
    brand: "Sony",
    type: "Electrónica",
    price: 499.99 
    },
    { 
    name: "Parrilla Eléctrica", 
    brand: "George Foreman",
    type: "Cocina",
    price: 59.99 
    },
    { 
    name: "Gafas para Natación", 
    brand: "Speedo",
    type: "Deportes",
    price: 15.00 
    },
    { 
    name: "Funda de Almohada", 
    brand: "Bamboo",
    type: "Hogar",
    price: 12.99 
    },
    { 
    name: "Lápiz", 
    brand: "Faber-Castell",
    type: "Papelería",
    price: 1.50 
    },
    { 
    name: "Set de Platos", 
    brand: "Corelle",
    type: "Cocina",
    price: 40.00 
    },
    { 
    name: "Cuaderno de Dibujo", 
    brand: "Canson",
    type: "Papelería",
    price: 10.00 
    },
    { 
    name: "Cámara Web", 
    brand: "Logitech",
    type: "Electrónica",
    price: 99.99 
    },
    { 
    name: "Kit de Jardinería", 
    brand: "Miracle-Gro",
    type: "Hogar",
    price: 35.00 
    },
    { 
    name: "Tablero de Corcho", 
    brand: "Quartet",
    type: "Papelería",
    price: 20.00 
    },
    { 
    name: "Escáner de Documentos", 
    brand: "Fujitsu",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Set de Brochas de Maquillaje", 
    brand: "Sigma Beauty",
    type: "Belleza",
    price: 70.00 
    },
    { 
    name: "Maquina de Coser", 
    brand: "Brother",
    type: "Hogar",
    price: 299.99 
    },
    { 
    name: "Funda para Teléfono", 
    brand: "OtterBox",
    type: "Accesorios",
    price: 29.99 
    },
    { 
    name: "Taza de Cerámica", 
    brand: "Starbucks",
    type: "Hogar",
    price: 15.00 
    },
    { 
    name: "Bolsas de Compras Reutilizables", 
    brand: "Baggu",
    type: "Accesorios",
    price: 20.00 
    },
    { 
    name: "Cápsulas de Café", 
    brand: "Nespresso",
    type: "Alimentos",
    price: 30.00 
    },
    { 
    name: "Manta", 
    brand: "Pendleton",
    type: "Hogar",
    price: 80.00 
    },
    { 
    name: "Funda para Laptop", 
    brand: "Targus",
    type: "Accesorios",
    price: 45.00 
    },
    { 
    name: "Juegos de Cartas", 
    brand: "Bicycle",
    type: "Juguetes",
    price: 5.00 
    },
    { 
    name: "Cojín", 
    brand: "Ikea",
    type: "Hogar",
    price: 25.00 
    },
    { 
    name: "Gafas de Protección", 
    brand: "3M",
    type: "Herramientas",
    price: 10.00 
    },
    { 
    name: "Bolsas de Basura", 
    brand: "Hefty",
    type: "Hogar",
    price: 8.00 
    },
    { 
    name: "Barra de Chocolate", 
    brand: "Lindt",
    type: "Alimentos",
    price: 3.50 
    },
    { 
    name: "Carcasa para Teléfono", 
    brand: "Spigen",
    type: "Accesorios",
    price: 12.99 
    },
    { 
    name: "Enciclopedia", 
    brand: "Britannica",
    type: "Libros",
    price: 120.00 
    },
    { 
    name: "Sierra Circular", 
    brand: "DeWalt",
    type: "Herramientas",
    price: 299.99 
    },
    { 
    name: "Refrigerador Portátil", 
    brand: "Igloo",
    type: "Aire Libre",
    price: 49.99 
    },
    { 
    name: "Tijeras", 
    brand: "Fiskars",
    type: "Herramientas",
    price: 12.00 
    },
    { 
    name: "Cámara de Seguridad", 
    brand: "Ring",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Impresora", 
    brand: "HP",
    type: "Electrónica",
    price: 120.00 
    },
    { 
    name: "Mochila para Laptop", 
    brand: "Targus",
    type: "Accesorios",
    price: 65.00 
    },
    { 
    name: "Mueble de TV", 
    brand: "Ikea",
    type: "Muebles",
    price: 150.00 
    },
    { 
    name: "Rasuradora", 
    brand: "Gillette",
    type: "Cuidado Personal",
    price: 19.99 
    },
    { 
    name: "Cortacésped", 
    brand: "Honda",
    type: "Jardinería",
    price: 450.00 
    },
    { 
    name: "Tijeras de Jardinería", 
    brand: "Felco",
    type: "Jardinería",
    price: 25.00 
    },
    { 
    name: "Botiquín de Primeros Auxilios", 
    brand: "First Aid Only",
    type: "Hogar",
    price: 35.00 
    },
    { 
    name: "Maleta de Viaje", 
    brand: "Samsonite",
    type: "Accesorios",
    price: 120.00 
    },
    { 
    name: "Lentes de Contacto", 
    brand: "Acuvue",
    type: "Cuidado Personal",
    price: 40.00 
    },
    { 
    name: "Escoba", 
    brand: "O-Cedar",
    type: "Hogar",
    price: 15.00 
    },
    { 
    name: "Juguete para Mascotas", 
    brand: "KONG",
    type: "Mascotas",
    price: 10.00 
    },
    { 
    name: "Gato de Taller", 
    brand: "Torin",
    type: "Herramientas",
    price: 30.00 
    },
    { 
    name: "Luz LED", 
    brand: "Philips",
    type: "Hogar",
    price: 20.00 
    },
    { 
    name: "Sopa Instantánea", 
    brand: "Nissin",
    type: "Alimentos",
    price: 1.99 
    },
    { 
    name: "Taza de Viaje", 
    brand: "Contigo",
    type: "Hogar",
    price: 19.99 
    },
    { 
    name: "Raspador de Hielo", 
    brand: "Hopkins",
    type: "Hogar",
    price: 12.00 
    },
    { 
    name: "Móvil", 
    brand: "Motorola",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Set de Cubertería", 
    brand: "Oneida",
    type: "Cocina",
    price: 60.00 
    },
    { 
    name: "Gato de Taller", 
    brand: "Torin",
    type: "Herramientas",
    price: 30.00 
    },
    { 
    name: "Espumador de Leche", 
    brand: "Nespresso",
    type: "Cocina",
    price: 50.00 
    },
    { 
    name: "Portátil", 
    brand: "HP",
    type: "Electrónica",
    price: 799.99 
    },
    { 
    name: "Sonda de Presión", 
    brand: "Wagner",
    type: "Herramientas",
    price: 100.00 
    },
    { 
    name: "Frigorífico", 
    brand: "Whirlpool",
    type: "Electrodomésticos",
    price: 699.99 
    },
    { 
    name: "Chaleco Táctico", 
    brand: "5.11",
    type: "Aire Libre",
    price: 89.99 
    },
    { 
    name: "Botón de Emergencia", 
    brand: "LifeAlert",
    type: "Hogar",
    price: 149.99 
    },
    { 
    name: "Botiquín", 
    brand: "Red Cross",
    type: "Hogar",
    price: 35.00 
    },
    { 
    name: "Refrigerador", 
    brand: "Samsung",
    type: "Electrodomésticos",
    price: 800.00 
    },
    { 
    name: "Mochila para Senderismo", 
    brand: "Osprey",
    type: "Aire Libre",
    price: 299.99 
    },
    { 
    name: "Botella de Agua", 
    brand: "CamelBak",
    type: "Accesorios",
    price: 29.99 
    },
    { 
    name: "Hoja de Afeitar", 
    brand: "Gillette",
    type: "Cuidado Personal",
    price: 3.00 
    },
    { 
    name: "Aspiradora", 
    brand: "Dyson",
    type: "Hogar",
    price: 499.99 
    },
    { 
    name: "Tijeras de Jardinería", 
    brand: "Fiskars",
    type: "Jardinería",
    price: 25.00 
    },
    { 
    name: "Escoba", 
    brand: "O-Cedar",
    type: "Hogar",
    price: 15.00 
    },
    { 
    name: "Café", 
    brand: "Peet's Coffee",
    type: "Alimentos",
    price: 8.99 
    },
    { 
    name: "Despertador", 
    brand: "Sony",
    type: "Hogar",
    price: 19.99 
    },
    { 
    name: "Set de Costura", 
    brand: "Singer",
    type: "Hogar",
    price: 50.00 
    },
    { 
    name: "Banda de Resistencia", 
    brand: "ProForm",
    type: "Deportes",
    price: 20.00 
    },
    { 
    name: "Pañuelos de Papel", 
    brand: "Kleenex",
    type: "Hogar",
    price: 5.00 
    },
    { 
    name: "Cámara Reflex", 
    brand: "Nikon",
    type: "Electrónica",
    price: 800.00 
    },
    { 
    name: "Almohadas", 
    brand: "Tempur-Pedic",
    type: "Hogar",
    price: 80.00 
    },
    { 
    name: "Paraguas", 
    brand: "Repel",
    type: "Accesorios",
    price: 25.00 
    },
    { 
    name: "Taladro", 
    brand: "Black & Decker",
    type: "Herramientas",
    price: 99.99 
    },
    { 
    name: "Batidora", 
    brand: "KitchenAid",
    type: "Cocina",
    price: 299.99 
    },
    { 
    name: "Zapatos de Seguridad", 
    brand: "Caterpillar",
    type: "Calzado",
    price: 120.00 
    },
    { 
    name: "Espejo", 
    brand: "Ikea",
    type: "Hogar",
    price: 30.00 
    },
    { 
    name: "Termómetro", 
    brand: "Braun",
    type: "Cuidado Personal",
    price: 45.00 
    },
    { 
    name: "Mueble de Jardín", 
    brand: "Resort",
    type: "Muebles",
    price: 400.00 
    },
    { 
    name: "Sartén", 
    brand: "Calphalon",
    type: "Cocina",
    price: 60.00 
    },
    { 
    name: "Cámara Digital", 
    brand: "Canon",
    type: "Electrónica",
    price: 450.00 
    },
    { 
    name: "Bolsas de Compras", 
    brand: "Reusable",
    type: "Accesorios",
    price: 10.00 
    },
    { 
    name: "Cargador de Coche", 
    brand: "Anker",
    type: "Electrónica",
    price: 15.99 
    },
    { 
    name: "Cortinas", 
    brand: "Ikea",
    type: "Hogar",
    price: 40.00 
    },
    { 
    name: "Set de Cubiertos", 
    brand: "Oneida",
    type: "Cocina",
    price: 40.00 
    },
    { 
    name: "Cojín de Masaje", 
    brand: "Zyllion",
    type: "Cuidado Personal",
    price: 49.99 
    },
    { 
    name: "Móvil", 
    brand: "Motorola",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Bicicleta", 
    brand: "Giant",
    type: "Deportes",
    price: 400.00 
    },
    { 
    name: "Pañales", 
    brand: "Pampers",
    type: "Bebés",
    price: 25.00 
    },
    { 
    name: "Cámara de Seguridad", 
    brand: "Ring",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Caja de Herramientas", 
    brand: "Stanley",
    type: "Herramientas",
    price: 50.00 
    },
    { 
    name: "Silla de Camping", 
    brand: "Coleman",
    type: "Aire Libre",
    price: 30.00 
    },
    { 
    name: "Set de Maquillaje", 
    brand: "Too Faced",
    type: "Belleza",
    price: 75.00 
    },
    { 
    name: "Zumo Natural", 
    brand: "Tropicana",
    type: "Alimentos",
    price: 4.00 
    },
    { 
    name: "Kit de Herramientas", 
    brand: "Craftsman",
    type: "Herramientas",
    price: 80.00 
    },
    { 
    name: "Máquina de Coser", 
    brand: "Singer",
    type: "Hogar",
    price: 199.99 
    },
    { 
    name: "Parrilla Portátil", 
    brand: "Weber",
    type: "Aire Libre",
    price: 129.99 
    },
    { 
    name: "Taza", 
    brand: "Yeti",
    type: "Hogar",
    price: 29.99 
    },
    { 
    name: "Masa de Modelar", 
    brand: "Play-Doh",
    type: "Juguetes",
    price: 8.00 
    },
    { 
    name: "Raspador", 
    brand: "O-Cedar",
    type: "Hogar",
    price: 15.00 
    },
    { 
    name: "Termo", 
    brand: "Stanley",
    type: "Accesorios",
    price: 40.00 
    },
    { 
    name: "Fruta Fresca", 
    brand: "N/A",
    type: "Alimentos",
    price: 1.00 
    },
    { 
    name: "Frigorífico Portátil", 
    brand: "Igloo",
    type: "Aire Libre",
    price: 49.99 
    },
    { 
    name: "Cámara de Acción", 
    brand: "GoPro",
    type: "Electrónica",
    price: 249.99 
    },
    { 
    name: "Funda para Cámara", 
    brand: "Lowepro",
    type: "Accesorios",
    price: 39.99 
    },
    { 
    name: "Saco de Dormir", 
    brand: "Coleman",
    type: "Aire Libre",
    price: 79.99 
    },
    { 
    name: "Juegos de Mesa", 
    brand: "Hasbro",
    type: "Juguetes",
    price: 25.00 
    },
    { 
    name: "Pulsera de Actividad", 
    brand: "Fitbit",
    type: "Electrónica",
    price: 99.99 
    },
    { 
    name: "Ducha Portátil", 
    brand: "Advanced Elements",
    type: "Aire Libre",
    price: 39.99 
    },
    { 
    name: "Juguete Educativo", 
    brand: "LeapFrog",
    type: "Juguetes",
    price: 30.00 
    },
    { 
    name: "Kit de Jardinería", 
    brand: "Miracle-Gro",
    type: "Hogar",
    price: 20.00 
    },
    { 
    name: "Cargador", 
    brand: "Anker",
    type: "Electrónica",
    price: 15.99 
    },
    { 
    name: "Bandeja", 
    brand: "Ikea",
    type: "Cocina",
    price: 12.99 
    },
    { 
    name: "Móvil", 
    brand: "Nokia",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Impresora", 
    brand: "Canon",
    type: "Electrónica",
    price: 129.99 
    },
    { 
    name: "Lámpara LED", 
    brand: "Philips",
    type: "Hogar",
    price: 20.00 
    },
    { 
    name: "Barra de Sonido", 
    brand: "Sonos",
    type: "Electrónica",
    price: 399.99 
    },
    { 
    name: "Batidora de Mano", 
    brand: "KitchenAid",
    type: "Cocina",
    price: 29.99 
    },
    { 
    name: "Funda para Cámara", 
    brand: "Lowepro",
    type: "Accesorios",
    price: 40.00 
    },
    { 
    name: "Cafetera de Émbolo", 
    brand: "Bodum",
    type: "Cocina",
    price: 29.99 
    },
    { 
    name: "Cubo de Basura", 
    brand: "Simplehuman",
    type: "Hogar",
    price: 60.00 
    },
    { 
    name: "Silla de Jardín", 
    brand: "Adams",
    type: "Muebles",
    price: 25.00 
    },
    { 
    name: "Máquina de Café", 
    brand: "Keurig",
    type: "Electrodomésticos",
    price: 89.99 
    },
    { 
    name: "Pulsera de Actividad", 
    brand: "Fitbit",
    type: "Electrónica",
    price: 99.99 
    },
    { 
    name: "Funda para Laptop", 
    brand: "AmazonBasics",
    type: "Accesorios",
    price: 29.99 
    },
    { 
    name: "Carcasa para Smartphone", 
    brand: "Spigen",
    type: "Accesorios",
    price: 12.99 
    },
    { 
    name: "Set de Platos", 
    brand: "Corelle",
    type: "Cocina",
    price: 40.00 
    },
    { 
    name: "Lámpara de Mesa", 
    brand: "Ikea",
    type: "Muebles",
    price: 39.99 
    },
    { 
    name: "Cortadora de Césped", 
    brand: "Husqvarna",
    type: "Jardinería",
    price: 299.99 
    },
    { 
    name: "Alfombra", 
    brand: "RugPadUSA",
    type: "Hogar",
    price: 50.00 
    },
    { 
    name: "Móvil", 
    brand: "LG",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Horno de Convección", 
    brand: "Breville",
    type: "Cocina",
    price: 299.99 
    },
    { 
    name: "Set de Cubiertos", 
    brand: "Oneida",
    type: "Cocina",
    price: 40.00 
    },
    { 
    name: "Escoba", 
    brand: "O-Cedar",
    type: "Hogar",
    price: 15.00 
    },
    { 
    name: "Móvil", 
    brand: "Xiaomi",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Taza de Café", 
    brand: "Yeti",
    type: "Hogar",
    price: 29.99 
    },
    { 
    name: "Cámara de Acción", 
    brand: "GoPro",
    type: "Electrónica",
    price: 249.99 
    },
    { 
    name: "Funda para Teléfono", 
    brand: "OtterBox",
    type: "Accesorios",
    price: 29.99 
    },
    { 
    name: "Termo", 
    brand: "Stanley",
    type: "Accesorios",
    price: 40.00 
    },
    { 
    name: "Móvil", 
    brand: "Sony",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Saco de Dormir", 
    brand: "Coleman",
    type: "Aire Libre",
    price: 79.99 
    },
    { 
    name: "Cámara Reflex", 
    brand: "Canon",
    type: "Electrónica",
    price: 800.00 
    },
    { 
    name: "Funda para Portátil", 
    brand: "AmazonBasics",
    type: "Accesorios",
    price: 29.99 
    },
    { 
    name: "Set de Costura", 
    brand: "Singer",
    type: "Hogar",
    price: 50.00 
    },
    { 
    name: "Bolsas de Compras Reutilizables", 
    brand: "Baggu",
    type: "Accesorios",
    price: 20.00 
    },
    { 
    name: "Zumo Natural", 
    brand: "Tropicana",
    type: "Alimentos",
    price: 4.00 
    },
    { 
    name: "Funda de Almohada", 
    brand: "Bamboo",
    type: "Hogar",
    price: 12.99 
    },
    { 
    name: "Cámara Digital", 
    brand: "Nikon",
    type: "Electrónica",
    price: 450.00 
    },
    { 
    name: "Escáner de Documentos", 
    brand: "Fujitsu",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Cámara de Seguridad", 
    brand: "Ring",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Cápsulas de Café", 
    brand: "Nespresso",
    type: "Alimentos",
    price: 30.00 
    },
    { 
    name: "Maleta de Viaje", 
    brand: "Samsonite",
    type: "Accesorios",
    price: 120.00 
    },
    { 
    name: "Almohadas", 
    brand: "Tempur-Pedic",
    type: "Hogar",
    price: 80.00 
    },
    { 
    name: "Zumo Natural", 
    brand: "Tropicana",
    type: "Alimentos",
    price: 4.00 
    },
    { 
    name: "Cargador de Coche", 
    brand: "Anker",
    type: "Electrónica",
    price: 15.99 
    },
    { 
    name: "Cámara de Seguridad", 
    brand: "Ring",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Lámpara de Mesa", 
    brand: "Ikea",
    type: "Muebles",
    price: 39.99 
    },
    { 
    name: "Luz LED", 
    brand: "Philips",
    type: "Hogar",
    price: 20.00 
    },
    { 
    name: "Cortinas", 
    brand: "Ikea",
    type: "Hogar",
    price: 40.00 
    },
    { 
    name: "Set de Platos", 
    brand: "Corelle",
    type: "Cocina",
    price: 40.00 
    },
    { 
    name: "Cámara Digital", 
    brand: "Canon",
    type: "Electrónica",
    price: 450.00 
    },
    { 
    name: "Móvil", 
    brand: "Samsung",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Máquina de Café", 
    brand: "Keurig",
    type: "Electrodomésticos",
    price: 89.99 
    },
    { 
    name: "Frigorífico", 
    brand: "Whirlpool",
    type: "Electrodomésticos",
    price: 699.99 
    },
    { 
    name: "Cámara Reflex", 
    brand: "Nikon",
    type: "Electrónica",
    price: 800.00 
    },
    { 
    name: "Cámara de Seguridad", 
    brand: "Ring",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Tijeras de Jardinería", 
    brand: "Felco",
    type: "Jardinería",
    price: 25.00 
    },
    { 
    name: "Sierra Circular", 
    brand: "DeWalt",
    type: "Herramientas",
    price: 299.99 
    },
    { 
    name: "Funda de Almohada", 
    brand: "Bamboo",
    type: "Hogar",
    price: 12.99 
    },
    { 
    name: "Escáner de Documentos", 
    brand: "Fujitsu",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Cámara Digital", 
    brand: "Canon",
    type: "Electrónica",
    price: 450.00 
    },
    { 
    name: "Cápsulas de Café", 
    brand: "Nespresso",
    type: "Alimentos",
    price: 30.00 
    },
    { 
    name: "Maleta de Viaje", 
    brand: "Samsonite",
    type: "Accesorios",
    price: 120.00 
    },
    { 
    name: "Almohadas", 
    brand: "Tempur-Pedic",
    type: "Hogar",
    price: 80.00 
    },
    { 
    name: "Botiquín", 
    brand: "Red Cross",
    type: "Hogar",
    price: 35.00 
    },
    { 
    name: "Juguete para Mascotas", 
    brand: "KONG",
    type: "Mascotas",
    price: 10.00 
    },
    { 
    name: "Cápsulas de Café", 
    brand: "Nespresso",
    type: "Alimentos",
    price: 30.00 
    },
    { 
    name: "Cámara de Seguridad", 
    brand: "Ring",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Móvil", 
    brand: "Xiaomi",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Funda para Portátil", 
    brand: "AmazonBasics",
    type: "Accesorios",
    price: 29.99 
    },
    { 
    name: "Funda para Teléfono", 
    brand: "OtterBox",
    type: "Accesorios",
    price: 29.99 
    },
    { 
    name: "Escáner de Documentos", 
    brand: "Fujitsu",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Sierra Circular", 
    brand: "DeWalt",
    type: "Herramientas",
    price: 299.99 
    },
    { 
    name: "Funda de Almohada", 
    brand: "Bamboo",
    type: "Hogar",
    price: 12.99 
    },
    { 
    name: "Móvil", 
    brand: "Motorola",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Set de Platos", 
    brand: "Corelle",
    type: "Cocina",
    price: 40.00 
    },
    { 
    name: "Lámpara de Mesa", 
    brand: "Ikea",
    type: "Muebles",
    price: 39.99 
    },
    { 
    name: "Set de Cubiertos", 
    brand: "Oneida",
    type: "Cocina",
    price: 40.00 
    },
    { 
    name: "Escoba", 
    brand: "O-Cedar",
    type: "Hogar",
    price: 15.00 
    },
    { 
    name: "Móvil", 
    brand: "Xiaomi",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Juguete para Mascotas", 
    brand: "KONG",
    type: "Mascotas",
    price: 10.00 
    },
    { 
    name: "Caja de Herramientas", 
    brand: "Stanley",
    type: "Herramientas",
    price: 50.00 
    },
    { 
    name: "Silla de Camping", 
    brand: "Coleman",
    type: "Aire Libre",
    price: 30.00 
    },
    { 
    name: "Frigorífico Portátil", 
    brand: "Igloo",
    type: "Aire Libre",
    price: 49.99 
    },
    { 
    name: "Botiquín", 
    brand: "Red Cross",
    type: "Hogar",
    price: 35.00 
    },
    { 
    name: "Cámara de Acción", 
    brand: "GoPro",
    type: "Electrónica",
    price: 249.99 
    },
    { 
    name: "Juguete Educativo", 
    brand: "LeapFrog",
    type: "Juguetes",
    price: 30.00 
    },
    { 
    name: "Cafetera", 
    brand: "Keurig",
    type: "Electrodomésticos",
    price: 89.99 
    },
    { 
    name: "Pulsera de Actividad", 
    brand: "Fitbit",
    type: "Electrónica",
    price: 99.99 
    },
    { 
    name: "Almohadas", 
    brand: "Tempur-Pedic",
    type: "Hogar",
    price: 80.00 
    },
    { 
    name: "Despertador", 
    brand: "Sony",
    type: "Hogar",
    price: 19.99 
    },
    { 
    name: "Maleta de Viaje", 
    brand: "Samsonite",
    type: "Accesorios",
    price: 120.00 
    },
    { 
    name: "Zumo Natural", 
    brand: "Tropicana",
    type: "Alimentos",
    price: 4.00 
    },
    { 
    name: "Termómetro", 
    brand: "Braun",
    type: "Cuidado Personal",
    price: 45.00 
    },
    { 
    name: "Termómetro", 
    brand: "Braun",
    type: "Cuidado Personal",
    price: 45.00 
    },
    { 
    name: "Cafetera", 
    brand: "Keurig",
    type: "Electrodomésticos",
    price: 89.99 
    },
    { 
    name: "Sierra Circular", 
    brand: "DeWalt",
    type: "Herramientas",
    price: 299.99 
    },
    { 
    name: "Botiquín", 
    brand: "Red Cross",
    type: "Hogar",
    price: 35.00 
    },
    { 
    name: "Maleta de Viaje", 
    brand: "Samsonite",
    type: "Accesorios",
    price: 120.00 
    },
    { 
    name: "Escáner de Documentos", 
    brand: "Fujitsu",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Alfombra", 
    brand: "RugPadUSA",
    type: "Hogar",
    price: 50.00 
    },
    { 
    name: "Escáner de Documentos", 
    brand: "Fujitsu",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Frigorífico", 
    brand: "Whirlpool",
    type: "Electrodomésticos",
    price: 699.99 
    },
    { 
    name: "Frigorífico Portátil", 
    brand: "Igloo",
    type: "Aire Libre",
    price: 49.99 
    },
    { 
    name: "Sierra Circular", 
    brand: "DeWalt",
    type: "Herramientas",
    price: 299.99 
    },
    { 
    name: "Cápsulas de Café", 
    brand: "Nespresso",
    type: "Alimentos",
    price: 30.00 
    },
    { 
    name: "Zumo Natural", 
    brand: "Tropicana",
    type: "Alimentos",
    price: 4.00 
    },
    { 
    name: "Lámpara de Mesa", 
    brand: "Ikea",
    type: "Muebles",
    price: 39.99 
    },
    { 
    name: "Juguete para Mascotas", 
    brand: "KONG",
    type: "Mascotas",
    price: 10.00 
    },
    { 
    name: "Maleta de Viaje", 
    brand: "Samsonite",
    type: "Accesorios",
    price: 120.00 
    },
    { 
    name: "Set de Costura", 
    brand: "Singer",
    type: "Hogar",
    price: 50.00 
    },
    { 
    name: "Almohadas", 
    brand: "Tempur-Pedic",
    type: "Hogar",
    price: 80.00 
    },
    { 
    name: "Bolsas de Compras Reutilizables", 
    brand: "Baggu",
    type: "Accesorios",
    price: 20.00 
    },
    { 
    name: "Luz LED", 
    brand: "Philips",
    type: "Hogar",
    price: 20.00 
    },
    { 
    name: "Escáner de Documentos", 
    brand: "Fujitsu",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Frigorífico", 
    brand: "Whirlpool",
    type: "Electrodomésticos",
    price: 699.99 
    },
    { 
    name: "Cafetera de Émbolo", 
    brand: "Bodum",
    type: "Cocina",
    price: 29.99 
    },
    { 
    name: "Cámara Reflex", 
    brand: "Canon",
    type: "Electrónica",
    price: 800.00 
    },
    { 
    name: "Juguete Educativo", 
    brand: "LeapFrog",
    type: "Juguetes",
    price: 30.00 
    },
    { 
    name: "Cápsulas de Café", 
    brand: "Nespresso",
    type: "Alimentos",
    price: 30.00 
    },
    { 
    name: "Cámara Digital", 
    brand: "Nikon",
    type: "Electrónica",
    price: 450.00 
    },
    { 
    name: "Funda para Teléfono", 
    brand: "OtterBox",
    type: "Accesorios",
    price: 29.99 
    },
    { 
    name: "Frigorífico", 
    brand: "Whirlpool",
    type: "Electrodomésticos",
    price: 699.99 
    },
    { 
    name: "Luz LED", 
    brand: "Philips",
    type: "Hogar",
    price: 20.00 
    },
    { 
    name: "Escáner de Documentos", 
    brand: "Fujitsu",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Cámara Reflex", 
    brand: "Nikon",
    type: "Electrónica",
    price: 800.00 
    },
    { 
    name: "Botiquín", 
    brand: "Red Cross",
    type: "Hogar",
    price: 35.00 
    },
    { 
    name: "Bolsas de Compras Reutilizables", 
    brand: "Baggu",
    type: "Accesorios",
    price: 20.00 
    },
    { 
    name: "Zumo Natural", 
    brand: "Tropicana",
    type: "Alimentos",
    price: 4.00 
    },
    { 
    name: "Set de Costura", 
    brand: "Singer",
    type: "Hogar",
    price: 50.00 
    },
    { 
    name: "Despertador", 
    brand: "Sony",
    type: "Hogar",
    price: 19.99 
    },
    { 
    name: "Cápsulas de Café", 
    brand: "Nespresso",
    type: "Alimentos",
    price: 30.00 
    },
    { 
    name: "Cámara de Seguridad", 
    brand: "Ring",
    type: "Electrónica",
    price: 199.99 
    },
    { 
    name: "Maleta de Viaje", 
    brand: "Samsonite",
    type: "Accesorios",
    price: 120.00 
    },
    { 
    name: "Escáner de Documentos", 
    brand: "Fujitsu",
    type: "Electrónica",
    price: 199.99
    }
];

  Products.insertMany(products)


    