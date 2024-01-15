// import React, { useState } from 'react';

// const IconWithClickContent = () => {
//   const [isClicked, setIsClicked] = useState(false);

//   return (
//     <div style={{ position: 'relative', display: 'inline-block' }}>
//       <span
//         onClick={() => setIsClicked(!isClicked)}
//         style={{ cursor: 'pointer' }}
//       >
//         Click me
//       </span>
      
//       {isClicked && (
//         <div
//           style={{
//             position: 'absolute',
//             top: '100%', // Adjust the position as needed
//             left: 0,
//             background: '#f0f0f0',
//             padding: '10px',
//             border: '1px solid #ccc',
//             borderRadius: '4px',
//             zIndex: 1,
//           }}
//         >
//           {/* Content to be displayed on click */}
//           <p>This is the click content!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default IconWithClickContent;

import React, { useState, useEffect, useRef } from 'react';

const IconWithClickContent = () => {
  const [isClicked, setIsClicked] = useState(false);
  const iconRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (iconRef.current && !iconRef.current.contains(event.target)) {
        // Clicked outside the icon, hide the content
        setIsClicked(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }} ref={iconRef}>
      <span
        onClick={() => setIsClicked(!isClicked)}
        style={{ cursor: 'pointer' }}
      >
        Click me
      </span>

      {isClicked && (
        <div
          style={{
            position: 'absolute',
            top: '100%', // Adjust the position as needed
            left: 0,
            background: '#f0f0f0',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            zIndex: 1,
          }}
        >
          {/* Content to be displayed on click */}
          <p>This is the click content!</p>
        </div>
      )}
    </div>
  );
};

export default IconWithClickContent;
