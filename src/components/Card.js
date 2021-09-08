import React from 'react';

const Card = ({name,id,email}) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow shadow-5 bw2' >
        <img src={`https://robohash.org/${id}?200x200`} c alt="logo" />
        <div>
            <h2>{name}</h2>
            <p>
                {email}
            </p>
        </div>

    </div>
  );
}

export default Card;
