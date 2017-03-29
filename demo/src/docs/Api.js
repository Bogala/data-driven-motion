import React from 'react'
import apiMarkdown from 'raw-loader!../../../docs/api.md'
import Loading from '../Loading'
import Markdown from 'react-markdown'
import crate from '../crate'

export default (props) => {
  return (
    <div {...props} className={'api-docs markdown-body'}>
      <Markdown source={apiMarkdown}/>
    </div>
  )
}