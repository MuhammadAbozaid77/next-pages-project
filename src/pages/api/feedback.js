import fs from "fs";
import path from "path";

//------------------------------------------------- POST Function -------------------------------------------------
export default function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.enteredEmail;
    const feedBack = req.body.enteredFeedback;
    const dataObject = {
      id: new Date().toISOString(),
      email,
      feedBack,
    };
    // Check DataBase------ Function DataBase ---- Working With File and Path----------------------
    // const filePath = path.join(process.cwd("data", "feedback.json"));
    // const fileData = fs?.readFile(filePath);
    // const data = JSON.parse(fileData);
    // data.push(dataObject);
    // fs.writeFileSync(filePath, JSON.stringify(data));
    //----------------------------------------------------------------------------------------------
    //Responce  Status If Data Added Successfuly

    res
      .status(201)
      .json({ message: "Data Added Successfuly", FeedBack: dataObject });
  } else {
    res.status(200).json({ message: "API Working Good" });
  }
}
