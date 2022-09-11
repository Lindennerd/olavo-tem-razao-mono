import app from "./app";
import { env } from "./env";

app.listen(env.PORT, () => {
  console.log(`Server started at ${env.PORT}`);
});
