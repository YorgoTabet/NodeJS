//looking into error handling
const dns = require('dns')
//for example here we have an error first check so if we put an unexisting url
// it will trigger it
dns.lookup('juniordevelopercentraasadal.com', (err, value) =>{
    if(err) {
        console.log(err);
        return;
    }
    console.log(value);
});