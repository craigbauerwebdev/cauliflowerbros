import axios from "axios";

export default function handler(req, res) {
    /* 
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json') 
    res.end(JSON.stringify({ name: 'John Doe' }))
    */
    axios.get("http://tartanweddings.com/wp-json/wp/v2/tartanbook")
        .then((response) => {

            console.log("from recipes api");

            //res.end(JSON.stringify({ name: 'John Doe' }));
            res.end(JSON.stringify(response.data));

            /* res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify([{ name: 'Test Data' }, { name: 'more data'}])) */
        })
        .catch((error) => {
            console.log(error);
        });
}