import React from 'react'

interface Props {
  image: string;
}

export default function DescriptionImage(props: Props) {
  const { image } = props;

  return (
    <React.Fragment>
      <div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};
