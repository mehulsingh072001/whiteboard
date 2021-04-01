const Eraser = () => {
    const { erase } = useContext(Context)
    const canvasRef = useRef(null);

    const clearCanvas = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d")

      if(erase[1](true)){
        context.clearRect(0, 0, window.innerWidth * 2, window.innerHeight * 2);
      }
    }

    return(
    )
}

export default Eraser
