import { customAlphabet }   from 'nanoid';

const urls = {};

class UrlController {
    

    async url(req, res) {
        Promise.resolve()
            .then(() => {
                const { original_url } = req.body;

                const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
                const nanoid = customAlphabet(alphabet, 6);
                const short_id = nanoid();
                const short_url = short_id;

                

                urls[short_url] = original_url;

                res.json({ original_url, short_url });
            })
            .catch(error => {
                res.status(400).json({ error: error.message });
            });
            
        
    }

    async redirectUrl(req, res) {
        Promise.resolve()
            .then(() => {
                const { short_url } = req.params;
                console.log(short_url);

                console.log(urls[short_url])
                const original_url = urls[short_url];
                

                if(!original_url) {
                    return res.status(400).json({ error: 'url non found' });
                }

                res.redirect(original_url)

            })
            .catch(error => {
                res.status(400).json({ error: error.message });
            })
    }

}


const urlController = new UrlController;


export default urlController;