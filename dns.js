//find dns of required web

const dns = require('dns');

dns.lookup('juniordevelopercentral.com', (err, value) =>{
    if(err) {
        console.log(err);
        return;
    }
    console.log(value);
});

//or you can use resolve instead which will send you all the IPs to that name
dns.resolve('juniordevelopercentral.com', (err, value) =>{
    if(err) {
        console.log(err);
        return;
    }
    console.log(value);
});

//reverse function => finds records that are assigned to the IP
dns.reverse('8.8.8.8', (err, value) =>{
    if(err) {
        console.log(err);
        return;
    }
    console.log(value);
});