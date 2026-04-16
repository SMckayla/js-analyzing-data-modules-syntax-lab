//combining users
function combineUsers(...args){
  let combinedObject = {users: []}
};





module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};