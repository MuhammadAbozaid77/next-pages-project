export default function handler(req, res) {
  const { commentId } = req.query;

  // const eventId =
  //------------- POST-API -------------
  if (req.method === "POST") {
    const { enteredEmail, enteredName, enteredText } = req.body;
    const storedObject = {
      id: new Date().toISOString(),
      enteredEmail,
      enteredName,
      enteredText,
    };
    // Server Validation Of Data Object
    if (
      !enteredEmail ||
      !enteredEmail.includes("@") ||
      !enteredName ||
      enteredName.trim() === "" ||
      !enteredText ||
      enteredText.trim() === ""
    ) {
      res.status(422).json({ message: "Inavlid Email" });
      return;
    }

    res.status(201).json({
      message: "Data Added Successfuly",
      data: storedObject,
    });
  }

  //------------- GET-API -------------

  if (req.method === "GET") {
    res.status(200, {
      data: "This Is Data",
      commmets: [{ id: 1, desc: "this Is Comment 1" }],
    });
  }
}
