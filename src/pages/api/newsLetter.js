//----------------- DataBase Connection -----------------
import { MongoClient } from "mongodb";
const databaseLink =
  "mongodb+srv://mohamed:7mw1Vr4lQoPL2kvT@cluster0.0d1qa.mongodb.net/nextTest?retryWrites=true&w=majority";
// "mongodb+srv://mohamed:7mw1Vr4lQoPL2kvT@cluster0.0d1qa.mongodb.net/nextTest?retryWrites=true&w=majority";
const client = new MongoClient(databaseLink);

//---------------------------------------------------------------------
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { enteredEmail } = req.body;
    if (!enteredEmail || !enteredEmail.includes("@")) {
      res.status(422).json({ message: "Inavlid Email" });
      return;
    }

    //--------------- Connection With Database And Query---------------
    await client.connect();
    const db = client.db("nextTest");

    // const client = await MongoClient.connect(databaseLink);
    await db.collection("users").insertOne({ email: enteredEmail });
    // await client.close();

    // Responce
    return res.status(201).json({ message: "You Are SignUp Successfuly" });
  }
}
