import React from 'react';

export const Canvas = props => {
  const canvasRef = React.useRef(null);
  const { draw, ...rest } = props

  React.useEffect(() => {
    const canvas = canvasRef.current;
		let animationFrameId;
    if (canvas !== null) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext('2d');
			const render = () => {
				draw(ctx);
				animationFrameId = window.requestAnimationFrame(render);
			}
      render()
    }
		return () => {
        window.cancelAnimationFrame(animationFrameId)
				}
  }, [draw]);

  return <canvas ref={canvasRef} {...rest}/>
}
