import React from 'react'
function Index() {
  return (
    <div>
      <div className="modelo-wrapper">
        <div
          style={{
            width: '100%',
            paddingBottom: '56.25%',
            position: 'relative',
          }}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}>
            <iframe
              src="
              https://app.modaiyun.com/embedded/1638836493060194304?viewport=false&autoplay=false&autorotate=false&hideTools=false&showBIM=false&showBBoxSize=false&showKooRender=false&showSettings=false"
              style={{ width: '100%', height: '100%' }}
              frameBorder="0"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
