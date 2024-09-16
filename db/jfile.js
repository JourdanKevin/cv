import fs from 'fs';


class Jfile{
    constructor(filepath){
        this.filepath = `./db/datas/${filepath}.json`
    }
    read(){
        return new Promise((resolve, reject) => {
            fs.readFile(this.filepath, 'utf8', (err, data) => {
              if (err) {
                reject(err);
              } else {
                try {
                  const jsonData = JSON.parse(data);
                  resolve(jsonData);
                } catch (parseError) {
                  reject(parseError);
                }
              }
            });
          });
    }
    write(){
        return new Promise((resolve, reject) => {
            const jsonData = JSON.stringify(data, null, 2);
            fs.writeFile(this.filepath, jsonData, 'utf8', (err) => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            });
          });
    }
}

export default Jfile;