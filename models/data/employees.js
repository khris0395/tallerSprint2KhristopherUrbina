import "dotenv/config.js"
import "../../config/database.js"
import Employees from "../Employee.js";

const employees = [
    { 
        name: "Carlos Pérez",
        position: "Gerente",
        salary: 3500000 
    },
    { 
        name: "María Gómez",
        position: "Asistente",
        salary: 1200000 
    },
    { 
        name: "José Martínez",
        position: "Supervisor",
        salary: 2500000 
    },
    { 
        name: "Laura Rodríguez",
        position: "Contadora",
        salary: 2800000 
    },
    { 
        name: "Andrés López",
        position: "Vendedor",
        salary: 1500000 
    },
    { 
        name: "Sofía Torres",
        position: "Diseñadora",
        salary: 2000000 
    },
    { 
        name: "Diego Ramírez",
        position: "Analista",
        salary: 3000000 
    },
    { 
        name: "Lucía Sánchez",
        position: "Recursos Humanos",
        salary: 2200000 
    },
    { 
        name: "Javier Ruiz",
        position: "Técnico",
        salary: 1800000 
    },
    { 
        name: "Valentina Morales",
        position: "Gerente de Proyectos",
        salary: 4000000 
    },
    { 
        name: "Sebastián Castro",
        position: "Marketing",
        salary: 2300000 
    },
    { 
        name: "Isabella Vega",
        position: "Secretaria",
        salary: 1100000 
    },
    { 
        name: "Mateo Jiménez",
        position: "Desarrollador",
        salary: 3200000 
    },
    { 
        name: "Camila Salazar",
        position: "Finanzas",
        salary: 2600000 
    },
    { 
        name: "Felipe Pineda",
        position: "Logística",
        salary: 2400000 
    },
];


Employees.insertMany(employees)