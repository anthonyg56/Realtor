import React from 'react'
import { BLOCKS, MARKS, Document } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import Styles from './styles/AboutMeBiography.module.scss'

interface Props {
  description: Document;
}

const renderOptions: Options = {
  renderText: text => {
    return text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]);
  },
};

export default function AboutMeBiography(props: Props) {
  const renderer = documentToReactComponents(props.description, renderOptions)
  return (
    <React.Fragment>
      <div className={Styles.mainDiv}>
        <div className={Styles.innerDiv}>
          <h2>Biography</h2>
          {renderer}
        </div>
      </div>
    </React.Fragment>
  )
}
