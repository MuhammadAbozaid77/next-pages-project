//---------------------------------------------------------------------
export default function handler(req, res) {
  if (req.method === "POST") {
    const { enteredEmail } = req.body;
    if (!enteredEmail || !enteredEmail.includes("@")) {
      res.status(422).json({ message: "Inavlid Email" });
      return;
    }
    return res.status(201).json({ message: "You Are SignUp Successfuly" });
  }
}
