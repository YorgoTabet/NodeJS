const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const file = 'myblog.txt'
const author = process.argv[2] || 'unknown';
const title = process.argv[3] || 'New Blog Post';

rl.question('Enter your blog post: ', (postContent) => {
    const blogEntry = `
    ${'-'.repeat(title.length)}
    ${title}
    ${'-'.repeat(title.length)}
    By ${author} on ${new Date()}

    ${postContent}
    `;
    fs.appendFile('blog.txt', blogEntry, (err)=>{
        if(err){
            console.log('Error Occured while saving blog');
            throw err;
        }
        console.log('The blog was posted sucessfully');
    })
    rl.close()
});