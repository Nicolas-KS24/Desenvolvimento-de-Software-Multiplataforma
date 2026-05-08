import "dotenv/config";
import express from 'express';
import path from 'path';

import { personRoutes } from './routes/person.routes';
import { carRoutes } from './routes/car.routes';
import { associationRoutes } from './routes/association.routes';
import { numberRoutes } from "./routes/numberPhone.routes";

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "pages", "index.html"));
});

console.log(__dirname);

app.use("/person", personRoutes);
app.use("/car", carRoutes);
app.use("/association", associationRoutes);
app.use("/number-phone", numberRoutes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});