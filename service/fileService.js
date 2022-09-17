const uuid = require('uuid');
const path = require('path');

class FileService {
    saveFile(images) {
        try {
            let files;
            if (!Array.isArray(images)) {
                files = [images];
            }
            else {
                files = [...images];
            }
            const filesNameArray = [];
            Object.values(files[0]).map(file => {
                const fileName = uuid.v4() + '.jpg';
                filesNameArray.push(fileName);
                const filePath = path.resolve('static', fileName);
                file.mv(filePath);
            })

            return filesNameArray;
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new FileService();