const zod  = require('zod');
// to create a valdation end point we must need to create another file
//basically types .js
//inputs to expect
const schema = zod.object({
    title : zod.string(),
    description : zod.string(),
})

const idSchema = zod.object({
    id :zod.string()
})
// how to export var from a file

module.exports = {
    schema:schema , idSchema :idSchema  
}
