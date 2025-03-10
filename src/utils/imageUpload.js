import path from "path";
import { writeFile } from "fs/promises";


async function uploadFile(file) {
    if (!file) {
        return { message: "No files received.", status: 400 };
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replaceAll(" ", "-");

    try {
        await writeFile(path.join(process.cwd(), "public/upload/", filename), buffer);
        return { message: "Success", status: 201, filename };
    } catch (error) {
        console.error("Error occurred ", error);
        return { message: "Failed", status: 500 };
    }
}

export default uploadFile;