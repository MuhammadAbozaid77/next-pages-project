//----------------- DataBase Connection -----------------
import { MongoClient } from "mongodb";
//---------------------------------------------------------------------
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { enteredEmail } = req.body;
    if (!enteredEmail || !enteredEmail.includes("@")) {
      res.status(422).json({ message: "Inavlid Email" });
      return;
    }

    //--------------- Connection With Database And Query---------------
    const databaseLink =
      "mongodb+srv://muhammadabozaid77:uECHo1asdBX31K52@cluster0.0d1qa.mongodb.net/nextTest?retryWrites=true&w=majority";
    // mongodb+srv://<username>:<password>@cluster0.0d1qa.mongodb.net/newsLetter?retryWrites=true&w=majority&appName=Cluster0

    const client = await MongoClient.connect(databaseLink);
    const db = client.db("nextTest");
    await db.collection("users").insertOne({ email: enteredEmail });
    client.close();

    // Responce
    return res.status(201).json({ message: "You Are SignUp Successfuly" });
  }
}

// 105.37.224.103
