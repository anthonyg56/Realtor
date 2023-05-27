import React from 'react'

interface Props {
  message: string;
}

export default function Error(props: Props) {
  return (
    <React.Fragment>
      <div>
        <p>{props.message}</p>
      </div>
    </React.Fragment>
  )
}
