import React from 'react'
interface PROPS {
    params: {
        'template-slug': string
    }
};
function CreateNewContent(props: PROPS) {
    console.log(props.params['template-slug']);
  return (
    <div>
        CreateNewContent
    </div>
  )
};
export default CreateNewContent;
