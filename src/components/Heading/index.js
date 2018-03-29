import React from 'react';

const Heading = ({ text, tag }) => {
  const CustomTag = tag;
  return (
    <div>
      <CustomTag>{text}</CustomTag>
    </div>
  );
}

export default Heading;