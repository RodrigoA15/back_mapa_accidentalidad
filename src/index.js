import app from "./app.js";
import { QX_DATABASE } from "./config/db.js";

QX_DATABASE();
const PORT = 4000;

app.listen(PORT, (error) => {
  if (error) {
    return console.log("Error listening");
  } else {
    console.log(`server listening on port ${PORT}`);
  }
});
