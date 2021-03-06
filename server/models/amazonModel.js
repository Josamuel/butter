const amazon = {}
const util = require('util')
const OperationHelper = require('apac').OperationHelper

var opHelper = new OperationHelper({
  awsId:     process.env.AWSID,
  awsSecret: process.env.AWSECRET,
  assocId:   process.env.AWASSOCIATEID
})

amazon.getDefault = () => 
  opHelper.execute('ItemSearch', {
    'SearchIndex': 'All',
    'Keywords': 'Amazon Gift Cards',
    'ResponseGroup': 'ItemAttributes,Images,Reviews'
  }).then(response => {
    // console.log("IMPLICT RETURN SUCK", response.result.ItemSearchResponse.Items)

    return response.result.ItemSearchResponse.Items
  })


amazon.getAll = (param) =>
  opHelper.execute('ItemSearch', {
    'SearchIndex': 'All',
    'Keywords': param,
    'ResponseGroup': 'ItemAttributes,Images'
  }).then(response => {
    // console.log("THE PARAM IS WORKING YAYAYAY", response.result.ItemSearchResponse.Items)
    return response.result.ItemSearchResponse.Items 
  })
  // console.log('Results:\n' + util.inspect(results) + '\n')
  // console.log('RESULTS ARE!~!~!~!', util.inspect(results.ItemSearchResponse.Items.Item))
  // util.inspect(results.ItemSearchResponse.Items.Item[0].ItemAttributes.ListPrice.FormattedPrice

module.exports = amazon